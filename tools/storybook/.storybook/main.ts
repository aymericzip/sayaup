import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../../../apps/*/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../libs/*/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: "../../../apps/nextjsapp/next.config.js",
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
