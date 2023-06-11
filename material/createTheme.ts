import { mixins } from "./mixins";
import { alpha } from "@mui/material";
import { createTheme as _createTheme } from "@mui/material/styles";
// Types
import type { Theme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
    interface TypeBackground {
        lightAnimationBar: string;
        MUIFormElementsBorder: string;
        lightSectionBackground: string;
        MUIFormElementsBackground: string;
    }
}

interface CreateThemeParams {
    mode: "light" | "dark";
    primary: string;
    secondary: string;
    success: string;
    error: string;
    warning: string;
    background: {
        default: string;
        paper: string;
        lightAnimationBar: string;
        MUIFormElementsBorder: string;
        lightSectionBackground: string;
        MUIFormElementsBackground: string;
    };
    text: {
        primary: string;
        secondary: string;
    };
}

export function createTheme(props: CreateThemeParams): Theme {
    return _createTheme({
        palette: {
            mode: props.mode,
            primary: {
                main: props.primary,
            },
            secondary: {
                main: props.secondary,
            },
            error: {
                main: props.error,
            },
            success: {
                main: props.success,
            },
            warning: {
                main: props.warning,
            },
            background: props.background,
            text: props.text,
        },
        typography: {
            fontFamily: '"Noto Sans", sans-serif',
        },
        components: {
            MuiButtonBase: {
                styleOverrides: {
                    root: {
                        fontFamily: '"Noto Sans", sans-serif',
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    h3: {
                        fontFamily: "Montserrat Alternates",
                        cursor: "default",
                    },
                    h4: {
                        fontWeight: 700,
                        fontFamily: "Montserrat Alternates",
                        fontSize: "32px",
                        lineHeight: "34px",
                        cursor: "default",
                        margin: "10px 0 0px 0",
                    },
                    body2: {
                        cursor: "default",
                    },
                    body1: {
                        cursor: "default",
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        background: alpha("#052946", 0.08),
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: "16px",
                        fontWeight: 400,
                        background: alpha("#000", 0.75),
                        padding: "4px 16px",
                        cursor: "default",
                        borderRadius: "3px",
                        userSelect: "none",
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        background: alpha(props.text.secondary, 0.2),
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    noOptions: {
                        background: props.background.default,
                    },
                    listbox: {
                        background: props.background.default,
                        "&::-webkit-scrollbar": { width: "8px" },
                        "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha("#832161", 0.3)}` },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#832161",
                            borderRadius: "2px",
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        boxSizing: "border-box",
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: alpha(props.text.primary, 0.75),
                    },
                },
            },
        },
        mixins: mixins,
    }) as Theme;
}
