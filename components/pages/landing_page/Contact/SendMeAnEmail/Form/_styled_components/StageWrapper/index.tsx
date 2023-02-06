// Tools
import { styled } from "@mui/system";
import * as animations from "./inputsAnimations";
// Styled components

export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    marginBottom: "10px",
    ".MuiFormControl-root": {
        position: "relative",
        boxSizing: "border-box",
        "&::after, &::before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "3px",
        },
        "&::before": {
            zIndex: 2,
            background: theme.palette.secondary.main,
        },
        "&::after": {
            zIndex: 3,
            background: theme.palette.primary.main,
        },
        "&>*": {
            animation: `${animations.contentAppearing} .001s .5s both`,
        },
    },
    "&.form-stage-is-changing": {
        ".MuiFormControl-root": {
            ".MuiInputLabel-root.MuiInputLabel-shrink": {
                opacity: 0,
            },
            "&>*": {
                animation: `${animations.contentDisappearing} .001s .5s both`,
            },
        },
    },

    "&.GENERAL_PURPOSE": {
        ".MuiFormControl-root": {
            paddingRight: "16px",
            "&::before": {
                animation: [
                    `${animations.GENERAL_PURPOSE.introStageOne} .3s .1s linear backwards`, //
                    `${animations.GENERAL_PURPOSE.introStageTwo} .3s .5s linear forwards`,
                ].join(", "),
            },
            "&::after": {
                animation: [
                    `${animations.GENERAL_PURPOSE.introStageOne} .3s .2s linear backwards`, //
                    `${animations.GENERAL_PURPOSE.introStageTwo} .3s .5s linear forwards`,
                ].join(", "),
            },
        },
        "&.form-stage-is-changing": {
            ".MuiFormControl-root": {
                "&::before": {
                    zIndex: 1,
                    background: theme.palette.secondary.main,
                    animation: [
                        `${animations.GENERAL_PURPOSE.outroStageOne} .3s .2s linear backwards`, //
                        `${animations.GENERAL_PURPOSE.outroStageTwo} .3s .6s linear forwards`,
                    ].join(", "),
                },
                "&::after": {
                    animation: [
                        `${animations.GENERAL_PURPOSE.outroStageOne} .3s .1s linear backwards`, //
                        `${animations.GENERAL_PURPOSE.outroStageTwo} .3s .5s linear forwards`,
                    ].join(", "),
                },
            },
        },
    },
    "&.CONTACT_DETAILS": {
        ".MuiFormControl-root": {
            paddingLeft: "16px",
            ".MuiInputLabel-root": {
                left: "16px",
            },
            "&::before": {
                animation: [
                    `${animations.CONTACT_DETAILS.introStageOne} .3s .1s linear backwards`, //
                    `${animations.CONTACT_DETAILS.introStageTwo} .3s .5s linear forwards`,
                ].join(", "),
            },
            "&::after": {
                animation: [
                    `${animations.CONTACT_DETAILS.introStageOne} .3s .2s linear backwards`, //
                    `${animations.CONTACT_DETAILS.introStageTwo} .3s .6s linear forwards`,
                ].join(", "),
            },
        },
        "&.form-stage-is-changing": {
            ".MuiFormControl-root": {
                "&::before": {
                    zIndex: 1,
                    background: theme.palette.secondary.main,
                    animation: [
                        `${animations.CONTACT_DETAILS.outroStageOne} .3s .2s linear backwards`, //
                        `${animations.CONTACT_DETAILS.outroStageTwo} .3s .6s linear forwards`,
                    ].join(", "),
                },
                "&::after": {
                    animation: [
                        `${animations.CONTACT_DETAILS.outroStageOne} .3s .1s linear backwards`, //
                        `${animations.CONTACT_DETAILS.outroStageTwo} .3s .5s linear forwards`,
                    ].join(", "),
                },
            },
        },
    },
}));
