import { alpha } from "@mui/system";
import { createTheme } from "@mui/material/styles";

export default createTheme({
    palette: {
        primary: {
            main: "#DA4167",
        },
        secondary: {
            main: "#832161",
        },
        error: {
            main: "#D62246",
        },
        success: {
            main: "#388E3C",
        },
        warning: {
            main: "#F57C00",
        },
        background: {
            default: "#F0EFF4",
            paper: "#3D2645",
        },
        text: {
            primary: "#000000",
        },
    },
    typography: {
        fontFamily: '"Noto Sans", sans-serif',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
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
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    background: "#fff",
                },
                noOptions: {
                    background: `#F0EFF4`,
                },
                listbox: {
                    background: `#F0EFF4`,
                    "&::-webkit-scrollbar": { width: "8px" },
                    "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha("#832161", 0.3)}` },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#832161",
                        borderRadius: "2px",
                    },
                },
            },
        },
    },
});
