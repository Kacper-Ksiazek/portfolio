// Types
import type { FunctionComponent } from "react";
// Other components
import _GlobalStyles from "@mui/material/GlobalStyles";

const GlobalStyles: FunctionComponent = (props) => {
    return (
        <_GlobalStyles
            styles={(theme) => {
                return {
                    ".alternative-font-family": {
                        fontFamily: '"Montserrat Alternates", sans-serif',
                    },
                    "::selection": {
                        background: theme.palette.secondary.main,
                        color: "#fff",
                    },
                    body: {
                        margin: 0,
                        padding: 0,
                        fontFamily: '"Noto Sans", sans-serif',
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        width: "100vw",
                        overflowX: "hidden",

                        "&::-webkit-scrollbar": {
                            width: "8px",
                            background: theme.palette.background.default,
                        },
                        "&::-webkit-scrollbar-track": {
                            boxShadow: `inset 0 0 2px ${theme.palette.mode === "light" ? "#888" : "#000"}`,
                            opacity: 0.1,
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "2px",
                        },
                    },
                };
            }}
        />
    );
};

export default GlobalStyles;
