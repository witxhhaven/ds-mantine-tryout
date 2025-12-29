import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";
import { LucideIcon } from "lucide-react";

export interface ButtonProps extends Omit<MantineButtonProps, 'color' | 'leftSection' | 'rightSection' | 'radius'> {
  /**
   * Button color variant
   * Use theme colors: 'blue', 'red', 'green', 'gray'
   */
  color?: 'blue' | 'red' | 'gray';
  /**
   * Button variant
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'default';
  /**
   * Left icon component from lucide-react
   */
  leftIcon?: LucideIcon;
  /**
   * Right icon component from lucide-react
   */
  rightIcon?: LucideIcon;
}

export function Button({
  color = 'blue',
  variant = 'filled',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <MantineButton
      color={color}
      variant={variant}
      radius="xl"
      leftSection={LeftIcon ? <LeftIcon size={16} /> : undefined}
      rightSection={RightIcon ? <RightIcon size={16} /> : undefined}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
