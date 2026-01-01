import type { Story, StoryDefault } from "@ladle/react";
import { ButtonShowcase } from "./Button";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export const Button: Story = () => <ButtonShowcase />;
