import type { Story, StoryDefault } from "@ladle/react";
import { ProjectCard } from "../../src/components/ProjectCard/ProjectCard";
import { Grid, Stack, Text } from "@mantine/core";
import { FileText, Headphones } from "lucide-react";

function ProjectCardShowcase() {
  return (
    <Stack gap="xl" p="xl">
      <div>
        <Text size="xl" fw={700} mb="md">
          Project Card
        </Text>
        <Text c="dimmed" mb="xl">
          Display project information with icons, badges, tags, and usage indicators
        </Text>
      </div>

      <Grid gutter="md" style={{ maxWidth: 900 }}>
        <Grid.Col span={6}>
          <ProjectCard
            title="HR Assistant"
            description="AI-powered HR query and recommendation system"
            tier="Free"
            date="Nov 25, 2024"
            tags={["Recommender", "RAGaaS", "Models", "Extra"]}
            userCount={3}
            keyCount={4}
            icon={FileText}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ProjectCard
            title="Meeting Analysis Bot"
            description="Automated meeting transcription and analysis"
            tier="Premium"
            date="Dec 1, 2024"
            tags={["Audio", "Models", "RAGaaS", "Extra"]}
            userCount={3}
            keyCount={4}
            icon={Headphones}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const ProjectCardStory: Story = () => <ProjectCardShowcase />;
