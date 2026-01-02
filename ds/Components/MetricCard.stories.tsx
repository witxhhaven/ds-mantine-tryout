import type { Story, StoryDefault } from "@ladle/react";
import { MetricCard } from "../../src/components/MetricCard/MetricCard";
import { Grid, Stack, Text } from "@mantine/core";
import { FolderOpen, Key, TrendingUp, Users } from "lucide-react";

function MetricCardShowcase() {
  return (
    <Stack gap="xl" p="xl">
      <div>
        <Text size="xl" fw={700} mb="md">
          Metric Card
        </Text>
        <Text c="dimmed" mb="xl">
          Display key metrics with icons and values. Inspired by dashboard
          metric cards.
        </Text>
      </div>

      <Grid gutter="md" style={{ maxWidth: 900 }}>
        <Grid.Col span={4}>
          <MetricCard
            label="Total Projects"
            value={2}
            icon={FolderOpen}
            iconColor="primary"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <MetricCard
            label="Active API Keys"
            value={8}
            icon={Key}
            iconColor="accent"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <MetricCard
            label="API Calls (30d)"
            value="127.5K"
            icon={TrendingUp}
            iconColor="success"
          />
        </Grid.Col>
      </Grid>

      <div>
        <Text size="lg" fw={600} mb="md" mt="xl">
          Other Variants
        </Text>
        <Grid gutter="md" style={{ maxWidth: 900 }}>
          <Grid.Col span={4}>
            <MetricCard
              label="Active Users"
              value="1.2K"
              icon={Users}
              iconColor="warning"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <MetricCard
              label="Success Rate"
              value="99.8%"
              icon={TrendingUp}
              iconColor="success"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <MetricCard
              label="Total Keys"
              value={42}
              icon={Key}
              iconColor="accent"
            />
          </Grid.Col>
        </Grid>
      </div>
    </Stack>
  );
}

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const MetricCardStory: Story = () => <MetricCardShowcase />;
