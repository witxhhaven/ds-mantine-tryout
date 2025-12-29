import { Stack, Title, Text, Box, Group, Divider } from "@mantine/core";

export function TextCombinations() {
  return (
    <Stack gap="xl" p="xl">
      {/* Header */}
      <div>
        <Text size="xl" fw={700} mb="md">
          Text Combinations
        </Text>
        <Text c="dimmed" mb="xl">
          Real-world examples of typography combinations and hierarchies
        </Text>
      </div>

      {/* Hero Section */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          HERO SECTION
        </Text>
        <Title order={1} mb="md">
          Welcome to Our Platform
        </Title>
        <Text size="lg" c="dimmed" maw={600}>
          Build amazing products with our comprehensive design system. Everything you need to create beautiful, accessible interfaces.
        </Text>
      </Box>

      <Divider />

      {/* Article Header */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          ARTICLE HEADER
        </Text>
        <Group gap="xs" mb="sm">
          <Text size="sm" c="dimmed">
            Design Systems
          </Text>
          <Text size="sm" c="dimmed">
            •
          </Text>
          <Text size="sm" c="dimmed">
            5 min read
          </Text>
        </Group>
        <Title order={2} mb="md">
          Building Scalable Design Systems
        </Title>
        <Text size="md" c="dimmed">
          A comprehensive guide to creating design systems that scale with your organization and product needs.
        </Text>
      </Box>

      <Divider />

      {/* Card with Hierarchy */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          CARD CONTENT
        </Text>
        <Title order={3} mb="xs">
          Feature Highlight
        </Title>
        <Text size="md" mb="md">
          Discover how our powerful features can transform your workflow and boost productivity across your entire team.
        </Text>
        <Text size="sm" c="dimmed">
          Last updated 2 days ago
        </Text>
      </Box>

      <Divider />

      {/* Section with Subheading */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          SECTION WITH SUBHEADING
        </Text>
        <Title order={4} mb="xs">
          Getting Started
        </Title>
        <Title order={6} c="dimmed" mb="md" fw={500}>
          Everything you need to begin your journey
        </Title>
        <Text size="md">
          Follow these simple steps to set up your environment and start building amazing experiences with our tools and components.
        </Text>
      </Box>

      <Divider />

      {/* Form Section */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          FORM SECTION
        </Text>
        <Title order={5} mb="xs">
          Contact Information
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          Please provide your details below
        </Text>
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Email Address
          </Text>
          <Text size="sm" c="dimmed">
            We'll never share your email with anyone else.
          </Text>
        </Stack>
      </Box>

      <Divider />

      {/* Small Print */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          LEGAL / SMALL PRINT
        </Text>
        <Title order={6} mb="xs">
          Terms and Conditions
        </Title>
        <Text size="sm" c="dimmed">
          By continuing, you agree to our Terms of Service and Privacy Policy. All rights reserved © 2025.
        </Text>
      </Box>

      <Divider />

      {/* Display Text with Caption */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          STATISTIC / CALLOUT
        </Text>
        <Title order={1} fw={700}>
          10,000+
        </Title>
        <Text size="md" c="dimmed">
          Active users worldwide
        </Text>
      </Box>

      <Divider />

      {/* Different Weights */}
      <Box>
        <Text size="sm" c="dimmed" fw={600} mb="sm">
          EMPHASIS VARIATIONS
        </Text>
        <Stack gap="sm">
          <Text size="md">
            This is <Text component="span" fw={600}>important information</Text> that needs emphasis within a sentence.
          </Text>
          <Text size="md">
            Use <Text component="span" fw={700}>bold text</Text> for stronger emphasis and <Text component="span" fw={300}>light text</Text> for de-emphasis.
          </Text>
          <Text size="md" c="dimmed">
            Dimmed text is perfect for supporting information that shouldn't compete with primary content.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
