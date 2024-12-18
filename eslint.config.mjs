import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize compatibility with eslint configuration
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the Next.js and TypeScript ESLint configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Add TypeScript rules
  {
    rules: {
      // Disable base rule and enforce TypeScript-specific rule for unused variables
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
