// Types
import type { FunctionComponent } from "react";
// Other components
import _GlobalStyles from "@mui/material/GlobalStyles";
import { alpha } from "@mui/material";

const GlobalStyles: FunctionComponent = (props) => {
    return (
        <_GlobalStyles
            styles={(theme) => {
                return {
                    ".MuiDateCalendar-root": {
                        background: theme.palette.background.default,
                        ".MuiDayCalendar-weekDayLabel": {
                            color: theme.palette.text.primary,
                        },
                    },

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
                            transition: "background .3s",
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

                    // STYLES FOR MUIDataPicker
                    "div.MuiDialog-container": {
                        "div.MuiPaper-root > div.MuiDialogContent-root > div.MuiPickersLayout-root": {
                            // Header - Toolbar
                            "div.MuiPickersLayout-toolbar": {
                                display: "none",

                                // !Alternatively in order to change header's color
                                // "span.MuiTypography-root":{
                                //     color: "#fff"
                                // }
                            },
                            // Content
                            "div.MuiPickersLayout-contentWrapper": {
                                "button.Mui-disabled": {
                                    color: theme.palette.mode === "light" ? theme.palette.text.disabled : "#fff",
                                    opacity: 0.2,
                                },
                            },
                            // Footer - Buttons wrapper
                            "div.MuiDialogActions-root": {
                                background: theme.palette.background.default,
                                "button.MuiButton-root": {
                                    width: "50%",
                                    border: "1px solid",
                                    "&:nth-of-type(1)": {
                                        color: theme.palette.text.primary,
                                        borderColor: theme.palette.background.MUIFormElementsBorder,
                                        background: theme.palette.background.MUIFormElementsBackground,
                                    },
                                    "&:nth-of-type(2)": {
                                        color: "#fff",
                                        borderColor: theme.palette.primary.main,
                                        background: theme.palette.primary.main,
                                    },
                                },
                            },
                        },
                    },
                };
            }}
        />
    );
};

export default GlobalStyles;
