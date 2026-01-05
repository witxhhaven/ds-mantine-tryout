import { Box } from "@mantine/core";

interface ExtraBigTextProps {
  /** The text to display */
  text: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Edge to position the text on */
  edge?: "top" | "bottom" | "left" | "right";
  /** Color of the text outline */
  color?: string;
  /** Stroke width of the outline */
  strokeWidth?: number;
}

export function ExtraBigText({
  text,
  fontSize = 200,
  edge = "top",
  color = "#5474b4",
  strokeWidth = 2,
}: ExtraBigTextProps) {
  const getPositionStyles = () => {
    const topBottomOffset = fontSize * 0.4;

    switch (edge) {
      case "top":
        return {
          top: `-${topBottomOffset}px`,
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "bottom":
        return {
          bottom: `-${topBottomOffset}px`,
          left: "50%",
          transform: "translateX(-50%)",
        };
      case "left":
        return {
          left: "0",
          top: "50%",
          transform: "translate(-50%, -50%) rotate(90deg)",
        };
      case "right":
        return {
          right: "0",
          top: "50%",
          transform: "translate(50%, -50%) rotate(90deg)",
        };
    }
  };

  return (
    <Box
      style={{
        position: "absolute",
        fontSize: `${fontSize}px`,
        fontWeight: 900,
        color: "transparent",
        WebkitTextStroke: `${strokeWidth}px ${color}`,
        textStroke: `${strokeWidth}px ${color}`,
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
        ...getPositionStyles(),
      }}
    >
      {text}
    </Box>
  );
}
