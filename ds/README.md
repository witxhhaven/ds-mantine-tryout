# Design System Documentation

## Folder Structure

```
ds/
├── 01-Foundation/         # Design primitives (colors, typography, spacing, etc.)
│   ├── Colors/
│   └── Typography/
├── 02-Components/         # Reusable UI components (buttons, inputs, etc.)
└── 03-Patterns/           # Complex patterns and compositions
```

## How Navigation Works

Ladle navigation is controlled by the `meta.title` property in story files:

- `"01 Foundation/Colors"` → Creates "01 Foundation" folder with "Colors" inside
- Numbered prefixes (01, 02, 03) ensure correct ordering
- Use forward slashes (/) for nested navigation

## Adding New Stories

1. Create a folder in the appropriate section (01-Foundation, 02-Components, etc.)
2. Add your component file (e.g., `Button.tsx`)
3. Add your story file (e.g., `Button.stories.tsx`)
4. Set the `meta.title` to control where it appears in navigation

Example:
```tsx
// ds/02-Components/Button/Button.stories.tsx
export const Button: Story = () => <Button>Click me</Button>;

Button.meta = {
  title: "02 Components/Button",
};
```
