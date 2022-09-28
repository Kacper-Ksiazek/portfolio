const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const config = {
    stories: [
        "../stories/**/*.stories.mdx", //
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links", //
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-material-ui",
    ],
    typescript: {
        check: false,
    },
    framework: "@storybook/react",
    webpackFinal: async (config) => {
        config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })];

        return config;
    },
    core: {
        builder: "@storybook/builder-webpack5",
    },
};

module.exports = config;
