import type { Story, StoryDefault } from "@ladle/react";
import { Stack, Text, Box, Group } from "@mantine/core";

// Custom theme colors (overridden in theme.ts)
const customColors = {
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

// Default Mantine colors (not overridden)
const defaultColors = {
  dark: ['#c9c9c9', '#b8b8b8', '#828282', '#696969', '#424242', '#3b3b3b', '#2e2e2e', '#242424', '#1f1f1f', '#141414'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f'],
};

interface ColorVariableRowProps {
  variableName: string;
  cssVariable: string;
  hexValue?: string;
}

function ColorVariableRow({ variableName, cssVariable, hexValue }: ColorVariableRowProps) {
  return (
    <Group
      justify="space-between"
      gap="md"
      p="xs"
      style={{
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Text size="sm" ff="monospace" style={{ flex: 1 }}>
        {variableName}
      </Text>
      <Text size="sm" ff="monospace" c="dimmed" style={{ flex: 1 }}>
        {cssVariable}
      </Text>
      <Box
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: hexValue || `var(${cssVariable})`,
          border: '1px solid #e0e0e0',
          flexShrink: 0,
        }}
      />
    </Group>
  );
}

function ColorVariables() {
  return (
    <Stack gap="xl" p="xl" maw={900}>
      {/* Header */}
      <div>
        <Text size="xl" fw={700} mb="md">
          Color Variables
        </Text>
        <Text c="dimmed" mb="xl">
          Mantine CSS color variables for the custom theme
        </Text>
      </div>

      {/* Base Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Base Colors
        </Text>
        <Stack gap={0}>
          <ColorVariableRow
            variableName="--mantine-color-white"
            cssVariable="--mantine-color-white"
            hexValue="#fff"
          />
          <ColorVariableRow
            variableName="--mantine-color-black"
            cssVariable="--mantine-color-black"
            hexValue="#000"
          />
        </Stack>
      </Box>

      {/* Semantic Colors (Light/Dark Mode Aware) */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Semantic Colors (Theme Aware)
        </Text>
        <Text size="sm" c="dimmed" mb="sm">
          These colors change based on light/dark mode
        </Text>
        <Stack gap={0}>
          <ColorVariableRow
            variableName="--mantine-color-bright"
            cssVariable="--mantine-color-bright"
          />
          <ColorVariableRow
            variableName="--mantine-color-text"
            cssVariable="--mantine-color-text"
          />
          <ColorVariableRow
            variableName="--mantine-color-body"
            cssVariable="--mantine-color-body"
          />
          <ColorVariableRow
            variableName="--mantine-color-error"
            cssVariable="--mantine-color-error"
          />
          <ColorVariableRow
            variableName="--mantine-color-placeholder"
            cssVariable="--mantine-color-placeholder"
          />
          <ColorVariableRow
            variableName="--mantine-color-anchor"
            cssVariable="--mantine-color-anchor"
          />
          <ColorVariableRow
            variableName="--mantine-color-dimmed"
            cssVariable="--mantine-color-dimmed"
          />
        </Stack>
      </Box>

      {/* Default/Border Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Default & Border Colors
        </Text>
        <Stack gap={0}>
          <ColorVariableRow
            variableName="--mantine-color-default"
            cssVariable="--mantine-color-default"
          />
          <ColorVariableRow
            variableName="--mantine-color-default-hover"
            cssVariable="--mantine-color-default-hover"
          />
          <ColorVariableRow
            variableName="--mantine-color-default-color"
            cssVariable="--mantine-color-default-color"
          />
          <ColorVariableRow
            variableName="--mantine-color-default-border"
            cssVariable="--mantine-color-default-border"
          />
        </Stack>
      </Box>

      {/* Disabled State Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Disabled State Colors
        </Text>
        <Stack gap={0}>
          <ColorVariableRow
            variableName="--mantine-color-disabled"
            cssVariable="--mantine-color-disabled"
          />
          <ColorVariableRow
            variableName="--mantine-color-disabled-color"
            cssVariable="--mantine-color-disabled-color"
          />
          <ColorVariableRow
            variableName="--mantine-color-disabled-border"
            cssVariable="--mantine-color-disabled-border"
          />
        </Stack>
      </Box>

      {/* Primary Color Variants */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Primary Color Variants
        </Text>
        <Stack gap={0}>
          <ColorVariableRow
            variableName="--mantine-primary-color-contrast"
            cssVariable="--mantine-primary-color-contrast"
          />
          <ColorVariableRow
            variableName="--mantine-primary-color-filled"
            cssVariable="--mantine-primary-color-filled"
          />
          <ColorVariableRow
            variableName="--mantine-primary-color-filled-hover"
            cssVariable="--mantine-primary-color-filled-hover"
          />
          <ColorVariableRow
            variableName="--mantine-primary-color-light"
            cssVariable="--mantine-primary-color-light"
          />
          <ColorVariableRow
            variableName="--mantine-primary-color-light-hover"
            cssVariable="--mantine-primary-color-light-hover"
          />
          <ColorVariableRow
            variableName="--mantine-primary-color-light-color"
            cssVariable="--mantine-primary-color-light-color"
          />
        </Stack>
      </Box>

      {/* Primary Color Shades */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Blue Shades
        </Text>
        <Stack gap={0}>
          {customColors.blue.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-primary-color-${index}`}
              cssVariable={`var(--mantine-color-blue-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Red Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Red Shades
        </Text>
        <Stack gap={0}>
          {customColors.red.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-red-${index}`}
              cssVariable={`var(--mantine-color-red-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Green Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Green Shades
        </Text>
        <Stack gap={0}>
          {customColors.green.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-green-${index}`}
              cssVariable={`var(--mantine-color-green-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Gray Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Gray Shades
        </Text>
        <Stack gap={0}>
          {customColors.gray.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-gray-${index}`}
              cssVariable={`var(--mantine-color-gray-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Dark Colors (Default Mantine) */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Dark Shades (Default Mantine)
        </Text>
        <Stack gap={0}>
          {defaultColors.dark.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-dark-${index}`}
              cssVariable={`var(--mantine-color-dark-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Pink Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Pink Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.pink.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-pink-${index}`}
              cssVariable={`var(--mantine-color-pink-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Grape Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Grape Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.grape.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-grape-${index}`}
              cssVariable={`var(--mantine-color-grape-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Violet Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Violet Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.violet.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-violet-${index}`}
              cssVariable={`var(--mantine-color-violet-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Indigo Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Indigo Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.indigo.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-indigo-${index}`}
              cssVariable={`var(--mantine-color-indigo-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Cyan Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Cyan Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.cyan.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-cyan-${index}`}
              cssVariable={`var(--mantine-color-cyan-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Teal Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Teal Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.teal.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-teal-${index}`}
              cssVariable={`var(--mantine-color-teal-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Lime Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Lime Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.lime.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-lime-${index}`}
              cssVariable={`var(--mantine-color-lime-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Yellow Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Yellow Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.yellow.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-yellow-${index}`}
              cssVariable={`var(--mantine-color-yellow-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>

      {/* Orange Colors */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Orange Shades
        </Text>
        <Stack gap={0}>
          {defaultColors.orange.map((color, index) => (
            <ColorVariableRow
              key={index}
              variableName={`--mantine-color-orange-${index}`}
              cssVariable={`var(--mantine-color-orange-${index})`}
              hexValue={color}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export default {
  title: "`01-Foundation`",
} satisfies StoryDefault;

export const ColorVariablesStory: Story = () => <ColorVariables />;
