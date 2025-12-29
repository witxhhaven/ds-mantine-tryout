import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";
import { LucideIcon } from "lucide-react";
import classes from "./FancyButton.module.css";

export interface FancyButtonProps extends Omit<MantineButtonProps, 'color' | 'leftSection' | 'rightSection' | 'radius' | 'variant'> {
  /**
   * Button color variant
   * Use theme colors: 'blue', 'red', 'green', 'gray'
   */
  color?: 'blue' | 'red' | 'gray';
  /**
   * Button variant - only filled and outline supported
   */
  variant?: 'filled' | 'outline';
  /**
   * Left icon component from lucide-react
   */
  leftIcon?: LucideIcon;
  /**
   * Right icon component from lucide-react
   */
  rightIcon?: LucideIcon;
}

export function FancyButton({
  color = 'blue',
  variant = 'filled',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className,
  ...props
}: FancyButtonProps) {
  return (
    <MantineButton
      color={color}
      variant={variant}
      radius={0}
      leftSection={LeftIcon ? <LeftIcon size={16} /> : undefined}
      rightSection={RightIcon ? <RightIcon size={16} /> : undefined}
      className={`${classes.fancyButton} ${className || ''}`}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
