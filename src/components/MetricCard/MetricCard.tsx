import { Card, Group, Text, Box } from "@mantine/core";
import { LucideIcon } from "lucide-react";
import classes from "./MetricCard.module.css";

export interface MetricCardProps {
  /**
   * Metric label (e.g., 'Total Projects', 'Active API Keys')
   */
  label: string;
  /**
   * Metric value to display
   */
  value: string | number;
  /**
   * Icon component from lucide-react
   */
  icon: LucideIcon;
  /**
   * Icon color variant
   */
  iconColor?: "primary" | "accent" | "success" | "warning";
}

export function MetricCard({
  label,
  value,
  icon: Icon,
  iconColor = "primary",
}: MetricCardProps) {
  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Group gap="sm" wrap="nowrap">
        <Box className={`${classes.iconContainer} ${classes[iconColor]}`}>
          <Icon size={16} className={classes.icon} />
        </Box>
        <Box>
          <Text size="xs" c="dimmed" className={classes.label}>
            {label}
          </Text>
          <Text fw={600} size="lg" className={classes.value}>
            {value}
          </Text>
        </Box>
      </Group>
    </Card>
  );
}
