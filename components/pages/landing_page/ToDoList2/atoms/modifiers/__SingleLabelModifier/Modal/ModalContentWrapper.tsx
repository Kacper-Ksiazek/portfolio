// Tools
import { fadeSimple } from "@/components/keyframes/intro";
import { styled } from "@mui/material";

export default styled("div")(({ theme }) => ({
    position: "relative",
    background: theme.palette.background.lightSectionBackground,
    width: "calc(100vw - 32px)",
    maxWidth: "480px",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    padding: "24px 32px",
    boxSizing: "border-box",
    borderRadius: "3px",
    outline: "none !important",
    animation: `${fadeSimple} .2s .1s both`,
    h3: {
        margin: "0 0 8px 0",
    },
    ".MuiFormControl-root": {
        "&.label-name": {
            flexGrow: 1,
            input: {
                height: "42px",
            },
        },
        ".MuiOutlinedInput-root": {
            height: "42px",
        },
        "&.color-picker": {
            width: "42px",
            marginLeft: "8px",
            input: {
                width: "32px",
                height: "34px",
                padding: 0,
                margin: "0 auto",
            },
            fieldset: {
                borderRadius: "3px",
            },
        },
    },
    button: {
        height: "36px",
        padding: "0 24px",
    },
}));
