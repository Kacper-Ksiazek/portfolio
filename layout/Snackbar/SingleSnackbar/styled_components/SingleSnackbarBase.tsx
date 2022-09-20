// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Styled components

const snackbarHeightReductionAfterOutro = keyframes({
    from: {
        maxHeight: "58px",
    },
    to: {
        maxHeight: 0,
    },
});

const snackbarOutroAnimation = keyframes({
    "0%": {
        right: "auto",
        left: "0",
        height: "100%",
        width: "100%",
    },
    "33%,66%": {
        height: "6px",
        width: "100%",
    },
    "100%": {
        right: "auto",
        left: "0",
        height: "6px",
        width: "0",
    },
});

const snackbarIntroAnimation = keyframes({
    "0%": {
        height: "6px",
        width: "0",
    },
    "33%,66%": {
        height: "6px",
        width: "100%",
    },
    "100%": {
        height: "100%",
        width: "100%",
    },
});

export default styled("div")(({ theme }) => ({
    marginTop: "8px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "5px",
    ".MuiAlert-icon": {
        svg: {
            fontSize: "28px",
        },
        animation: `${fadeSimple} .3s .6s both linear`,
    },
    ".snackbar-msg": {
        position: "relative",
        zIndex: 1,
        animation: `${fadeSimple} .3s .7s both linear`,
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        width: "100%",
        height: "100%",
        animation: `${snackbarIntroAnimation} .5s both linear`,
    },
    // Background colors
    "&.success": {
        "&::before": {
            background: theme.palette.success.main,
        },
    },
    "&.error": {
        "&::before": {
            background: theme.palette.error.main,
        },
    },
    "&.warning": {
        "&::before": {
            background: theme.palette.warning.main,
        },
    },
    "&.info": {
        "&::before": {
            background: theme.palette.primary.main,
        },
    },
    //
    "&.outro": {
        animation: `${snackbarHeightReductionAfterOutro} .2s .8s both`,
        "&::before": {
            animation: `${snackbarOutroAnimation} .5s .3s linear both`,
        },

        ".MuiAlert-icon": {
            animation: `${fadeSimpleOUT} .3s .2s both linear`,
        },
        ".snackbar-msg": {
            animation: `${fadeSimpleOUT} .3s .1s both linear`,
        },
        ".snackbar-counter-down-wrapper": {
            animation: `${fadeSimpleOUT} .3s both linear`,
        },
    },
}));
