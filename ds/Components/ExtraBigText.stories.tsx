import type { Story, StoryDefault } from "@ladle/react";
import { ExtraBigText } from "./ExtraBigText";
import { Box } from "@mantine/core";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const ExtraBigTextStory: Story = () => (
  <Box
    style={{
      width: "100vw",
      height: "100vh",
      position: "relative",
      overflow: "hidden",
      margin: 0,
      padding: 0,
    }}
  >
    <ExtraBigText text="DESIGN" edge="top" fontSize={300} />
    <ExtraBigText text="SYSTEM" edge="bottom" fontSize={300} />
    <ExtraBigText text="WEB" edge="left" fontSize={250} />
    <ExtraBigText text="UI" edge="right" fontSize={250} />
  </Box>
);
