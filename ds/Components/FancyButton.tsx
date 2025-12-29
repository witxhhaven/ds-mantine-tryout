import { Stack, Text, Group, Box } from "@mantine/core";
import { FancyButton } from "../../src/components/FancyButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FancyButtonShowcase() {
  return (
    <Stack gap="xl" p="xl">
      {/* Header */}
      <div>
        <Text size="xl" fw={700} mb="md">
          FancyButton Component
        </Text>
        <Text c="dimmed" mb="xl">
          Buttons with beveled corners and bottom-right radius
        </Text>
      </div>

      {/* Filled Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Filled (Default)
        </Text>
        <Group gap="md">
          <FancyButton color="blue">Blue Button</FancyButton>
          <FancyButton color="red">Red Button</FancyButton>
          <FancyButton color="gray">Gray Button</FancyButton>
        </Group>
      </Box>

      {/* Outline Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Outline
        </Text>
        <Group gap="md">
          <FancyButton color="blue" variant="outline">Blue Button</FancyButton>
          <FancyButton color="red" variant="outline">Red Button</FancyButton>
          <FancyButton color="gray" variant="outline">Gray Button</FancyButton>
        </Group>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Sizes
        </Text>
        <Group gap="md" align="center">
          <FancyButton color="blue" size="xs">Extra Small</FancyButton>
          <FancyButton color="blue" size="sm">Small</FancyButton>
          <FancyButton color="blue" size="md">Medium</FancyButton>
          <FancyButton color="blue" size="lg">Large</FancyButton>
          <FancyButton color="blue" size="xl">Extra Large</FancyButton>
        </Group>
      </Box>

      {/* States */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          States
        </Text>
        <Group gap="md">
          <FancyButton color="blue">Default</FancyButton>
          <FancyButton color="blue" loading>Loading</FancyButton>
          <FancyButton color="blue" disabled>Disabled</FancyButton>
        </Group>
      </Box>

      {/* Full Width */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Full Width
        </Text>
        <FancyButton color="blue" fullWidth>Full Width Button</FancyButton>
      </Box>

      {/* With Icons */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          With Icons
        </Text>
        <Group gap="md">
          <FancyButton color="blue" leftIcon={ArrowLeft}>Previous</FancyButton>
          <FancyButton color="blue" rightIcon={ArrowRight}>Next</FancyButton>
          <FancyButton color="blue" leftIcon={ArrowLeft} rightIcon={ArrowRight}>Both Icons</FancyButton>
        </Group>
      </Box>

      {/* Icons with Outline Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Icons with Outline Variant
        </Text>
        <Group gap="md">
          <FancyButton color="blue" variant="outline" leftIcon={ArrowLeft}>Outline Left</FancyButton>
          <FancyButton color="red" variant="outline" rightIcon={ArrowRight}>Outline Right</FancyButton>
          <FancyButton color="gray" variant="outline" leftIcon={ArrowLeft} rightIcon={ArrowRight}>Outline Both</FancyButton>
        </Group>
      </Box>
    </Stack>
  );
}
