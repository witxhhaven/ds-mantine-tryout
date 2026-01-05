import { Box } from "@mantine/core";
import { useEffect, useState, useRef } from "react";

interface CircleAudioVisualiserProps {
  /** Number of circles to display */
  circleCount?: number;
  /** Base size of circles when inactive */
  baseSize?: number;
  /** Maximum size of circles when active */
  maxSize?: number;
  /** Gap between circles */
  gap?: number;
  /** Color of circles */
  color?: string;
}

export function CircleAudioVisualiser({
  circleCount = 5,
  baseSize = 1,
  maxSize,
  gap,
  color = "#5474b4",
}: CircleAudioVisualiserProps) {
  const [sizes, setSizes] = useState<number[]>(Array(circleCount).fill(baseSize));
  const [calculatedMaxSize, setCalculatedMaxSize] = useState<number>(maxSize || 64);
  const [calculatedGap, setCalculatedGap] = useState<number>(gap || 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Calculate gap and max size based on container width (with 10% padding on each side)
  useEffect(() => {
    function updateSizes() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Available width after 10% padding on left and right = 80% of container
        const availableWidth = containerWidth * 0.8;

        // Calculate gap: availableWidth / [(circleCount * 2) - 1]
        const gapSize = Math.floor(availableWidth / ((circleCount * 2) - 1));
        setCalculatedGap(gapSize);

        // Calculate max size: availableWidth / circleCount
        const calculatedSize = Math.floor(availableWidth / circleCount);
        setCalculatedMaxSize(Math.max(calculatedSize, baseSize));
      }
    }

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [circleCount, baseSize]);

  useEffect(() => {
    let stream: MediaStream | null = null;

    async function setupAudio() {
      try {
        // Request microphone access
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        // Create audio context and analyser
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 64; // Small FFT size for better performance

        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);

        // Start visualization loop
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

        function updateVisualizer() {
          if (!analyserRef.current) return;

          analyserRef.current.getByteFrequencyData(dataArray);

          // Map frequency data to circle sizes (from center outward)
          const newSizes = Array(circleCount)
            .fill(0)
            .map((_, index) => {
              // Calculate distance from center
              const center = (circleCount - 1) / 2;
              const distanceFromCenter = Math.abs(index - center);

              // Map distance to frequency bin (center = low freq, edges = high freq)
              const binIndex = Math.floor((distanceFromCenter / (circleCount / 2)) * dataArray.length);
              const frequency = dataArray[Math.min(binIndex, dataArray.length - 1)];

              // Normalize to 0-1 range
              const intensity = frequency / 255;

              // Map to size range
              return baseSize + (calculatedMaxSize - baseSize) * intensity;
            });

          setSizes(newSizes);
          animationFrameRef.current = requestAnimationFrame(updateVisualizer);
        }

        updateVisualizer();
      } catch (error) {
        console.error("Error accessing microphone:", error);
        setSizes(Array(circleCount).fill(baseSize));
      }
    }

    setupAudio();

    return () => {
      // Cleanup
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [circleCount, baseSize, calculatedMaxSize]);

  return (
    <Box
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      {sizes.map((size, index) => {
        // Calculate position for each circle starting at 10%
        // Use pixel values instead of percentage to avoid ref.current issues
        const leftOffset = 10; // 10% starting position
        const spacing = calculatedMaxSize + calculatedGap;

        return (
          <Box
            key={index}
            style={{
              position: "absolute",
              left: `calc(10% + ${index * spacing}px)`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: `${size}px`,
              height: `${size}px`,
              border: `2px solid ${color}`,
              backgroundColor: "transparent",
              borderRadius: "50%",
              // Pixelated 8-bit style
              imageRendering: "pixelated",
              imageRendering: "-moz-crisp-edges" as any,
              imageRendering: "crisp-edges" as any,
              // Add hard edges for circles
              clipPath: `circle(50%)`,
              // Disable anti-aliasing
              WebkitFontSmoothing: "none" as any,
            }}
          />
        );
      })}
    </Box>
  );
}
