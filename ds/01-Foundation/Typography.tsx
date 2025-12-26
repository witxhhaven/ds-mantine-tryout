import { Stack, Title, Text, Box, Group } from "@mantine/core";

const sampleText = "How vexingly quick daft zebras jump";

export function Typography() {
  const fontWeights = [
    { value: 100, label: "Thin (100)" },
    { value: 200, label: "ExtraLight (200)" },
    { value: 300, label: "Light (300)" },
    { value: 400, label: "Regular (400)" },
    { value: 500, label: "Medium (500)" },
    { value: 600, label: "SemiBold (600)" },
    { value: 700, label: "Bold (700)" },
    { value: 800, label: "ExtraBold (800)" },
    { value: 900, label: "Black (900)" },
  ];

  return (
    <Stack gap="xl" p="xl">
      {/* Header */}
      <div>
        <Text size="xl" fw={700} mb="md">
          Typography System
        </Text>
        <Text c="dimmed" mb="xl">
          Type scale using 1.2 ratio with 16px base size
        </Text>
      </div>

      {/* Headings Section */}
      <Box>
        <Text size="lg" fw={600} mb="lg">
          Headings
        </Text>
        <Stack gap="md">
          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                h1
              </Text>
              <Text size="xs" c="dimmed">
                47.78px
              </Text>
            </Group>
            <Title order={1}>{sampleText}</Title>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                h2
              </Text>
              <Text size="xs" c="dimmed">
                39.81px
              </Text>
            </Group>
            <Title order={2}>{sampleText}</Title>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                h3
              </Text>
              <Text size="xs" c="dimmed">
                33.18px
              </Text>
            </Group>
            <Title order={3}>{sampleText}</Title>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                h4
              </Text>
              <Text size="xs" c="dimmed">
                27.65px
              </Text>
            </Group>
            <Title order={4}>{sampleText}</Title>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                h5
              </Text>
              <Text size="xs" c="dimmed">
                23.04px
              </Text>
            </Group>
            <Title order={5}>{sampleText}</Title>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                h6
              </Text>
              <Text size="xs" c="dimmed">
                19.2px
              </Text>
            </Group>
            <Title order={6}>{sampleText}</Title>
          </Box>
        </Stack>
      </Box>

      {/* Text Sizes Section */}
      <Box>
        <Text size="lg" fw={600} mb="lg">
          Text Sizes
        </Text>
        <Stack gap="md">
          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                xl
              </Text>
              <Text size="xs" c="dimmed">
                23.04px
              </Text>
            </Group>
            <Text size="xl">{sampleText}</Text>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                lg
              </Text>
              <Text size="xs" c="dimmed">
                19.2px
              </Text>
            </Group>
            <Text size="lg">{sampleText}</Text>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                md (default)
              </Text>
              <Text size="xs" c="dimmed">
                16px
              </Text>
            </Group>
            <Text size="md">{sampleText}</Text>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                sm
              </Text>
              <Text size="xs" c="dimmed">
                13.33px
              </Text>
            </Group>
            <Text size="sm">{sampleText}</Text>
          </Box>

          <Box>
            <Group gap="xs" mb={4}>
              <Text size="xs" c="dimmed" fw={500}>
                xs
              </Text>
              <Text size="xs" c="dimmed">
                11.11px
              </Text>
            </Group>
            <Text size="xs">{sampleText}</Text>
          </Box>
        </Stack>
      </Box>

      {/* Font Weights Section */}
      <Box>
        <Text size="lg" fw={600} mb="lg">
          Font Weights
        </Text>
        <Stack gap="md">
          {fontWeights.map((weight) => (
            <Box key={weight.value}>
              <Group gap="xs" mb={4}>
                <Text size="xs" c="dimmed" fw={500}>
                  {weight.label}
                </Text>
              </Group>
              <Text size="md" fw={weight.value}>
                {sampleText}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
