import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps, Box, Text, Group } from "@mantine/core";
import { AlertCircle, CheckCircle } from "lucide-react";
import classes from './TextInput.module.css';

export interface TextInputProps extends Omit<MantineTextInputProps, 'label' | 'error'> {
  /**
   * Field label text
   */
  label?: string;
  /**
   * Whether the field is required (shows * indicator)
   */
  isRequired?: boolean;
  /**
   * Helper message shown below the input in default state
   */
  helperMessage?: string;
  /**
   * Error message - when provided, shows error state with red icon and message
   */
  error?: string;
  /**
   * Success message - when provided, shows valid state with green icon and message
   */
  success?: string;
}

export function TextInput({
  label,
  isRequired = false,
  helperMessage,
  error,
  success,
  ...props
}: TextInputProps) {
  // Determine the message to show and its type
  const hasError = !!error;
  const hasSuccess = !!success && !hasError;
  const hasHelper = !!helperMessage && !hasError && !hasSuccess;

  return (
    <Box>
      {/* Label */}
      {label && (
        <Group gap={4} mb={4}>
          <Text size="sm" fw={700} c="gray.6">
            {label}
          </Text>
          {isRequired && (
            <Text size="sm" fw={700} c="red">
              *
            </Text>
          )}
        </Group>
      )}

      {/* Input Field */}
      <MantineTextInput
        {...props}
        classNames={{
          input: `${classes.input} ${hasError ? classes.inputError : classes.inputDefault}`,
        }}
      />

      {/* Messages */}
      {hasError && (
        <Group gap={6} mt={4}>
          <AlertCircle size={12} color="var(--mantine-color-red-6)" />
          <Text size="sm" c="red.6">
            {error}
          </Text>
        </Group>
      )}

      {hasSuccess && (
        <Group gap={6} mt={4}>
          <CheckCircle size={12} color="var(--mantine-color-green-6)" />
          <Text size="sm" c="green.6">
            {success}
          </Text>
        </Group>
      )}

      {hasHelper && (
        <Text size="sm" c="gray.6" mt={4}>
          {helperMessage}
        </Text>
      )}
    </Box>
  );
}
