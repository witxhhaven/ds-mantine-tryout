import type { StoryDefault } from "@ladle/react";
import { ProductShowcase } from "../../src/components/ProductShowcase";
import { FileText, Globe, Code, Github, GitBranch, Network, Zap } from "lucide-react";
import { Box, Text, Group } from "@mantine/core";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const DocsProduct = () => (
  <ProductShowcase
    logo={
      <Group gap="sm" wrap="nowrap">
        <Zap size={32} color="var(--mantine-color-blue-6)" fill="var(--mantine-color-blue-6)" />
        <Text size="xl" fw={700} c="blue.6" style={{ lineHeight: 1 }}>
          Platform.AI
        </Text>
      </Group>
    }
    heading="The modern content engine for API docs and product guides."
    description="Create and scale dynamic developer docs and API references. Built for teams needing full control and customization — no heavy lifting, no upkeep, no reinventing the wheel."
    ctaText="Explore docs"
    ctaLink="/products/docs"
    mainImageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1726391564911/a6b0cad4-ed2f-4472-bd08-4d2636edb2dc.png?auto=format"
    features={[
      {
        icon: FileText,
        text: "Unlimited guides and API references in a single project.",
      },
      {
        icon: Globe,
        text: "Use custom domains and sub-paths.",
      },
      {
        icon: Code,
        text: "Go headless and fully customize the UI to match your brand.",
      },
      {
        icon: Github,
        text: "Sync with GitHub for open-source contributions.",
      },
      {
        icon: Network,
        text: "Collaborate easily — involve the entire team, not just developers.",
      },
    ]}
    testimonial={{
      quote:
        "Hashnode's doc creation and collaboration tool is 10x easier, with a top-tier editor and beautiful UI—excited to launch alongside their release!",
      author: "Brandon Strittmatter",
      role: "Co-Founder & CEO, Outerbase",
      avatarUrl:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1726509810738/ded64db7-5949-4079-a182-b637110ba56b.png?auto=format",
    }}
  />
);
