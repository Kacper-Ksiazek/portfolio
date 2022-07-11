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
                    fontSize: "1rem",
                    letterSpacing: "1px",
                    fontWeight: 300,
                    textTransform: "capitalize",
                    background: "#052946",
                    padding: "5px 10px",
                    cursor: "default",
                },
            },
        },
    },
});
