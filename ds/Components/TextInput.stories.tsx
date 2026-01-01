import { Stack, Text, Box, Group } from "@mantine/core";
import { TextInput } from "../../src/components/TextInput";
import { useState } from "react";
import type { StoryDefault } from "@ladle/react";

export default {
  title: "`02-Components`",
} satisfies StoryDefault;

export function TextField() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Email validation
  const getEmailValidation = () => {
    if (!email) {
      return { helperMessage: "Enter your email address" };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: "Please enter a valid email address" };
    }
    return { success: "Email format is valid" };
  };

  // Username validation
  const getUsernameValidation = () => {
    if (!username) {
      return { helperMessage: "Username must be at least 3 characters" };
    }
    if (username.length < 3) {
      return { error: `Too short (${username.length}/3 characters minimum)` };
    }
    return { success: `Good username (${username.length} characters)` };
  };

  // Password validation
  const getPasswordValidation = () => {
    if (!password) {
      return { helperMessage: "Password must be at least 8 characters" };
    }
    if (password.length < 8) {
      return { error: `Weak password (${password.length}/8 characters)` };
    }
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
    if (!hasNumber || !hasSpecial) {
      return { error: "Password must include numbers and special characters" };
    }
    return { success: "Strong password!" };
  };

  return (
    <Stack gap="xl" p="xl" maw={600}>
      {/* Header */}
      <div>
        <Text size="xl" fw={700} mb="md">
          TextInput Component
        </Text>
        <Text c="dimmed" mb="xl">
          Text input field with validation states
        </Text>
      </div>

      {/* Interactive Section */}
      <Box bg='gray.0' p='xl'>
        <Text size="lg" fw={600} mb="md">
          Interactive - Message Changes
        </Text>
        <Text size="sm" c="dimmed" mb="md">
          Type in the fields below to see how messages change based on validation
        </Text>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="your.email@example.com"
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...getEmailValidation()}
          />
          <TextInput
            label="Username"
            placeholder="Enter username"
            isRequired
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            {...getUsernameValidation()}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter password"
            isRequired
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            {...getPasswordValidation()}
          />
        </Stack>
      </Box>

      {/* Size Section */}
      <Box style={{ border: '1px solid var(--mantine-color-gray-2)' }} p="xl">
        <Text size="lg" fw={600} mb="md">
          Size
        </Text>
        <Stack gap="md">
          <TextInput
            label="Extra Small (xs)"
            placeholder="Placeholder"
            size="xs"
            helperMessage="Size: xs"
          />
          <TextInput
            label="Small (sm)"
            placeholder="Placeholder"
            size="sm"
            helperMessage="Size: sm (default)"
          />
          <TextInput
            label="Medium (md)"
            placeholder="Placeholder"
            size="md"
            helperMessage="Size: md"
          />
          <TextInput
            label="Large (lg)"
            placeholder="Placeholder"
            size="lg"
            helperMessage="Size: lg"
          />
          <TextInput
            label="Extra Large (xl)"
            placeholder="Placeholder"
            size="xl"
            helperMessage="Size: xl"
          />
        </Stack>
      </Box>

      {/* States Section */}
      <Box style={{ border: '1px solid var(--mantine-color-gray-2)' }} p="xl">
        <Text size="lg" fw={600} mb="md">
          States
        </Text>
        <Stack gap="md">
          <TextInput
            label="Default"
            placeholder="Placeholder"
            helperMessage="Helper message content"
          />
          <TextInput
            label="Required"
            placeholder="Placeholder"
            isRequired
            helperMessage="This field is required"
          />
          <TextInput
            label="Error"
            placeholder="Placeholder"
            isRequired
            error="Invalid message content"
          />
          <TextInput
            label="Success"
            placeholder="Placeholder"
            success="Valid message content"
          />
          <TextInput
            label="Disabled"
            placeholder="Placeholder"
            disabled
          />
        </Stack>
      </Box>
    </Stack>
  );
}
