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

        // return merge(config, {
        //     resolve: {
        //         alias: {
        //             "@emotion/react": getPackageDir("@emotion/react"),
        //         },
        //     },
        // });
        return config;
    },
    core: {
        builder: "@storybook/builder-webpack5",
    },
};

module.exports = config;

function getPackageDir(filepath) {
    let currDir = path.dirname(require.resolve(filepath));
    while (true) {
        if (fs.existsSync(path.join(currDir, "package.json"))) {
            return currDir;
        }
        const { dir, root } = path.parse(currDir);
        if (dir === root) {
            throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
        }
        currDir = dir;
    }
}
