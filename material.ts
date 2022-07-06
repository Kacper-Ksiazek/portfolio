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
            paper: "#F0EFF4",
            default: "#3D2645",
        },
        text: {
            primary: "#000000",
        },
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: alpha("#052946", 0.08),
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: "#fff",
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
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontWeight: 700,
                    letterSpacing: "-1px",
                    fontSize: "1.8rem",
                },
                h4: {
                    fontWeight: 700,
                    letterSpacing: "-1px",
                    fontSize: "2rem",
                },
                h3: {
                    fontWeight: 900,
                    letterSpacing: "-1px",
                    margin: "0 0 10px 0",
                    fontSize: "2.2rem",
                    lineHeight: "40px",
                    ["@media (max-width:1600px)"]: {
                        lineHeight: "38px",
                        fontSize: "2rem",
                    },
                    ["@media (max-width:1200px)"]: {
                        lineHeight: "32px",
                        fontSize: "1.8rem",
                    },

                    ["@media (max-width:900px)"]: {
                        fontSize: "2.5rem ",
                        lineHeight: "45px",
                    },
                    ["@media (max-width:700px)"]: {
                        fontSize: "2.2rem ",
                        lineHeight: "36px",
                    },
                    ["@media (max-width:400px)"]: {
                        fontSize: "2rem ",
                        lineHeight: "30px",
                    },
                },
                h2: {
                    fontWeight: 900,
                    letterSpacing: "-2px",
                    lineHeight: "55px",
                    ["@media (max-width:700px)"]: {
                        fontSize: "3.5rem",
                    },
                    ["@media (max-width:500px)"]: {
                        fontSize: "3rem",
                    },
                },
                h1: {
                    lineHeight: "84px",
                    fontSize: "5rem",
                    fontWeight: "900",
                    letterSpacing: "-2px",
                    ["@media (max-width:1500px)"]: {
                        fontSize: "4.5rem",
                        lineHeight: "70px",
                    },
                    ["@media (max-width:700px)"]: {
                        fontSize: "4rem",
                        lineHeight: "55px",
                    },
                    ["@media (max-width:500px)"]: {
                        fontSize: "3.5rem",
                        lineHeight: "50px",
                    },
                    "&.long-text": {
                        lineHeight: "78px",
                        fontSize: "3.5rem",
                        ["@media (max-width:1500px)"]: {
                            fontSize: "3rem",
                            lineHeight: "70px",
                        },
                        ["@media (max-width:700px)"]: {
                            fontSize: "2.5rem",
                            lineHeight: "60px",
                        },
                        ["@media (max-width:600px)"]: {
                            fontSize: "2rem",
                            lineHeight: "50px",
                        },
                    },
                },
                body1: {
                    fontSize: "1.3rem",
                    ["@media (max-width:1500px)"]: {
                        fontSize: "1.1rem",
                    },
                },
                body2: {
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                    ["@media (max-width:1200px)"]: {
                        fontSize: "1rem",
                    },
                },
            },
        },
    },
});
