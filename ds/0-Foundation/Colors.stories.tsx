import type { Story, StoryDefault } from "@ladle/react";
import { Stack, Text, Box } from "@mantine/core";

interface ColorSwatchProps {
  color: string;
  shade: number;
  hexCode: string;
}

function ColorSwatch({ color, shade, hexCode }: ColorSwatchProps) {
  const cssVar = `var(--mantine-color-${color}-${shade})`;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Box
        bg={`${color}.${shade}`}
        style={{
          width: "200px",
          height: "80px",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          flexShrink: 0,
        }}
      />
      <Box>
        <Text size="sm" fw={500}>
          {hexCode.toUpperCase()}
        </Text>
        <Text size="xs" c="dimmed">
          {cssVar}
        </Text>
      </Box>
    </Box>
  );
}

interface ColorPaletteProps {
  name: string;
  colorKey: string;
  hexCodes: string[];
}

function ColorPalette({ name, colorKey, hexCodes }: ColorPaletteProps) {
  return (
    <Stack gap="sm">
      <Text size="lg" fw={600}>
        {name}
      </Text>
      <Box
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {hexCodes.map((hex, shade) => (
          <ColorSwatch key={shade} color={colorKey} shade={shade} hexCode={hex} />
        ))}
      </Box>
    </Stack>
  );
}

function ColorShowcase() {
  const colors = {
    blue: [
      '#ecf4ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc0',
      '#5f7cb7',
      '#5474b4',
      '#44639f',
      '#3a5890',
      '#2c4b80',
    ],
    red: [
      '#ffeaf3',
      '#fcd4e1',
      '#f4a7bf',
      '#ec779c',
      '#e64f7e',
      '#e3366c',
      '#e22862',
      '#c91a52',
      '#b41148',
      '#9f003e',
    ],
    green: [
      '#e8faf1',
      '#d1f2e1',
      '#a3e4c4',
      '#72d5a4',
      '#4ac889',
      '#2fbe77',
      '#1eb96a',
      '#15a35a',
      '#0f914f',
      '#067d42',
    ],
    gray: [
      '#f5f7f9',
      '#e8ecf0',
      '#d1d8e0',
      '#b8c2ce',
      '#9eabbb',
      '#8897ab',
      '#7a8a9f',
      '#67778d',
      '#586880',
      '#485772',
    ],
  };

  return (
    <Stack gap="xl" p="xl">
      <div>
        <Text size="xl" fw={700} mb="md">
          Color Palette Showcase
        </Text>
        <Text c="dimmed" mb="xl">
          Your custom color palettes with 10 shades each (0-9, lightest to darkest)
        </Text>
      </div>

      <ColorPalette name="Blue" colorKey="blue" hexCodes={colors.blue} />
      <ColorPalette name="Red" colorKey="red" hexCodes={colors.red} />
      <ColorPalette name="Green" colorKey="green" hexCodes={colors.green} />
      <ColorPalette name="Gray" colorKey="gray" hexCodes={colors.gray} />
    </Stack>
  );
}

export default {
  title: "`01-Foundation`",
} satisfies StoryDefault;

export const ColorPaletteStory: Story = () => <ColorShowcase />;
