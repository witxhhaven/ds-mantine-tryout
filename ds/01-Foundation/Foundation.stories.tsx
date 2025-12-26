import type { Story } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../../src/theme";
import { ColorShowcase } from "./Colors";
import { Typography as TypographyComponent } from "./Typography";
import "@mantine/core/styles.css";

export const Typography: Story = () => (
  <MantineProvider theme={theme}>
    <TypographyComponent />
  </MantineProvider>
);

export const Colors: Story = () => (
  <MantineProvider theme={theme}>
    <ColorShowcase />
  </MantineProvider>
);

Typography.meta = {
  title: "01 Foundation/Typography",
};

Colors.meta = {
  title: "01 Foundation/Colors",
};
