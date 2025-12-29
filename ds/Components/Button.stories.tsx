import type { Story, StoryDefault } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../src/theme";
import { ButtonShowcase } from "./Button";
import "@mantine/core/styles.css";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const Button: Story = () => (
  <MantineProvider theme={theme}>
    <ButtonShowcase />
  </MantineProvider>
);
