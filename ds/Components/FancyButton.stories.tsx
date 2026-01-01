import type { Story, StoryDefault } from "@ladle/react";
import { FancyButtonShowcase } from "./FancyButton";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const FancyButton: Story = () => <FancyButtonShowcase />;
