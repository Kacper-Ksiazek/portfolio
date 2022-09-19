// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import { barIntroAnimation, barOutroAnimation } from "./keyframes";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export default styled(ButtonBase)(({ theme }) => ({
    padding: "4px 24px",
    fontSize: "16px",
    borderRadius: "3px",
    textTransform: "capitalize",
    fontFamily: "Montserrat Alternates",
    overflow: "hidden",
    background: theme.palette.primary.main,
    "&:not(&:nth-of-type(1))": {
        marginLeft: "12px",
    },
    ".hover-animation-bar": {
        position: "absolute",
        "&.violet": {
            background: theme.palette.secondary.main,
            zIndex: 2,
        },
        "&.black": {
            background: theme.palette.background.paper,
            zIndex: 1,
        },
    },
    ".text, svg": {
        position: "relative",
        zIndex: 3,
    },
    ".animation-trigger": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
    },
    "&.display-hover-animation": {
        ".hover-animation-bar": {
            "&.violet": {
                animation: `${barIntroAnimation} .3s .2s both linear`,
            },
            "&.black": {
                animation: `${barIntroAnimation} .3s both linear`,
            },
        },
    },
    "&.hide-hover-animation": {
        ".hover-animation-bar": {
            "&.violet": {
                animation: `${barOutroAnimation} .3s  both linear`,
            },
            "&.black": {
                animation: `${barOutroAnimation} .3s .2s both linear`,
            },
        },
    },
    ...(RWD as any),
}));
