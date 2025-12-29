import type { Story, StoryDefault } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../src/theme";
import { FancyButtonShowcase } from "./FancyButton";
import "@mantine/core/styles.css";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;


export const FancyButton: Story = () => (
  <MantineProvider theme={theme}>
    <FancyButtonShowcase />
  </MantineProvider>
);
