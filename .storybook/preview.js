import React from "react";
import "../styles/general.css";

import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import theme from "../material";

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
