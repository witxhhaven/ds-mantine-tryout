import { Card, Badge, Group, Text, Box } from "@mantine/core";
import { FileText, Users, Key } from "lucide-react";

export interface ProjectCardProps {
  /**
   * Project title
   */
  title: string;
  /**
   * Project description
   */
  description: string;
  /**
   * Project tier badge (e.g., 'Free', 'Premium')
   */
  tier?: string;
  /**
   * Project date
   */
  date?: string;
  /**
   * Array of tag names to display
   */
  tags?: string[];
  /**
   * Number of users
   */
  userCount?: number;
  /**
   * Number of keys
   */
  keyCount?: number;
  /**
   * Icon component from lucide-react
   */
  icon?: React.ComponentType<{ size?: number }>;
}

export function ProjectCard({
  title,
  description,
  tier,
  date,
  tags = [],
  userCount,
  keyCount,
  icon: Icon = FileText,
}: ProjectCardProps) {
  const visibleTags = tags.slice(0, 3);
  const remainingCount = tags.length - 3;

  return (
    <Card padding="lg" radius="md" withBorder>
      <Card.Section inheritPadding py="md">
        <Group justify="space-between" align="flex-start">
          <Box
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              backgroundColor: "var(--mantine-color-blue-0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={24} color="var(--mantine-color-blue-6)" />
          </Box>
          <Group gap="xs">
            {tier && (
              <Badge
                variant={tier === "Premium" ? "filled" : "light"}
                color={tier === "Premium" ? "violet" : "gray"}
                size="sm"
              >
                {tier}
              </Badge>
            )}
          </Group>
        </Group>
      </Card.Section>

      <Card.Section inheritPadding py="md">
        {date && (
          <Text size="xs" c="dimmed" mb={4}>
            {date}
          </Text>
        )}
        <Text fw={600} size="lg" mb={4}>
          {title}
        </Text>
        <Text size="sm" c="dimmed" lineClamp={2}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section inheritPadding py="md">
        <Group gap="xs">
          {visibleTags.map((tag, index) => (
            <Badge key={index} variant="light" color="blue" size="sm">
              {tag}
            </Badge>
          ))}
          {remainingCount > 0 && (
            <Badge variant="light" color="gray" size="sm">
              +{remainingCount} more
            </Badge>
          )}
        </Group>
      </Card.Section>

      <Card.Section inheritPadding py="md">
        <Group gap="md">
          {userCount !== undefined && (
            <Group gap="xs">
              <Users size={16} color="var(--mantine-color-gray-6)" />
              <Text size="sm" c="dimmed">
                {userCount}
              </Text>
            </Group>
          )}
          {keyCount !== undefined && (
            <Group gap="xs">
              <Key size={16} color="var(--mantine-color-gray-6)" />
              <Text size="sm" c="dimmed">
                {keyCount}
              </Text>
            </Group>
          )}
        </Group>
      </Card.Section>
    </Card>
  );
}
