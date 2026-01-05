import type { Story, StoryDefault } from "@ladle/react";
import { CircleAudioVisualiser } from "./CircleAudioVisualiser";
import { Box } from "@mantine/core";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const CircleAudioVisualiserStory: Story = () => (
  <Box
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircleAudioVisualiser circleCount={9} />
  </Box>
);
