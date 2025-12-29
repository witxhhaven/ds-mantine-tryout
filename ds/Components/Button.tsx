import { Stack, Title, Text, Group, Box } from "@mantine/core";
import { Button } from "../../src/components/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ButtonShowcase() {
  return (
    <Stack gap="xl" p="xl">
      {/* Header */}
      <div>
        <Text size="xl" fw={700} mb="md">
          Button Component
        </Text>
        <Text c="dimmed" mb="xl">
          Buttons with custom theme colors
        </Text>
      </div>

      {/* Filled Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Filled (Default)
        </Text>
        <Group gap="md">
          <Button color="blue">Blue Button</Button>
          <Button color="red">Red Button</Button>
          <Button color="gray">Gray Button</Button>
        </Group>
      </Box>

      {/* Light Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Light
        </Text>
        <Group gap="md">
          <Button color="blue" variant="light">Blue Button</Button>
          <Button color="red" variant="light">Red Button</Button>
          <Button color="gray" variant="light">Gray Button</Button>
        </Group>
      </Box>

      {/* Outline Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Outline
        </Text>
        <Group gap="md">
          <Button color="blue" variant="outline">Blue Button</Button>
          <Button color="red" variant="outline">Red Button</Button>
          <Button color="gray" variant="outline">Gray Button</Button>
        </Group>
      </Box>

      {/* Subtle Variant */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Subtle
        </Text>
        <Group gap="md">
          <Button color="blue" variant="subtle">Blue Button</Button>
          <Button color="red" variant="subtle">Red Button</Button>
          <Button color="gray" variant="subtle">Gray Button</Button>
        </Group>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Sizes
        </Text>
        <Group gap="md" align="center">
          <Button color="blue" size="xs">Extra Small</Button>
          <Button color="blue" size="sm">Small</Button>
          <Button color="blue" size="md">Medium</Button>
          <Button color="blue" size="lg">Large</Button>
          <Button color="blue" size="xl">Extra Large</Button>
        </Group>
      </Box>

      {/* States */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          States
        </Text>
        <Group gap="md">
          <Button color="blue">Default</Button>
          <Button color="blue" loading>Loading</Button>
          <Button color="blue" disabled>Disabled</Button>
        </Group>
      </Box>

      {/* Full Width */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Full Width
        </Text>
        <Button color="blue" fullWidth>Full Width Button</Button>
      </Box>

      {/* With Icons */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          With Icons
        </Text>
        <Group gap="md">
          <Button color="blue" leftIcon={ArrowLeft}>Previous</Button>
          <Button color="blue" rightIcon={ArrowRight}>Next</Button>
          <Button color="blue" leftIcon={ArrowLeft} rightIcon={ArrowRight}>Both Icons</Button>
        </Group>
      </Box>

      {/* Icons with Variants */}
      <Box>
        <Text size="lg" fw={600} mb="md">
          Icons with Variants
        </Text>
        <Group gap="md">
          <Button color="red" variant="light" leftIcon={ArrowLeft}>Light</Button>
          <Button color="blue" variant="outline" rightIcon={ArrowRight}>Outline</Button>
          <Button color="gray" variant="subtle" leftIcon={ArrowLeft}>Subtle</Button>
        </Group>
      </Box>
    </Stack>
  );
}
