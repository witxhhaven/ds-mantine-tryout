import type { GlobalProvider } from "@ladle/react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../src/theme";
import "@mantine/core/styles.css";

export const Provider: GlobalProvider = ({ children }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
