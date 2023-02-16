import { alpha } from "@mui/system";
import { createTheme as _createTheme } from "@mui/material/styles";
// Types
import type { Theme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
    interface TypeBackground {
        lightAnimationBar: string;
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
    };
    text: {
        primary: string;
        secondary: string;
    };
}

export function createTheme(props: CreateThemeParams): Theme {
    return _createTheme({
        palette: {
            mode: "light",
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
            text: {
                primary: props.text.primary,
                secondary: props.text.secondary,
            },
        },
        typography: {
            fontFamily: '"Noto Sans", sans-serif',
        },
        components: {
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
                        background: alpha(props.text.primary, 0.75),
                        padding: "4px 16px",
                        cursor: "default",
                        borderRadius: "3px",
                        userSelect: "none",
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        ".MuiOutlinedInput-root": {
                            background: props.text.secondary,
                        },
                    },
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
    }) as Theme;
}
