import type { Story, StoryDefault } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../src/theme";
import { TextCombinations } from "./TextCombinations";
import "@mantine/core/styles.css";

export default {
  title: "`01-Foundation`",
} satisfies StoryDefault;

export const TypeSample: Story = () => (
  <MantineProvider theme={theme}>
    <TextCombinations />
  </MantineProvider>
);
