// Tools
import { styled } from "@mui/material";
import * as animations from "./keyframes";
import { SELECTORS } from "../css_reference";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Styled components

export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    marginBottom: "10px",
    gap: "6px",

    [SELECTORS.CONTENT_ITEM]: {
        position: "relative",
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        input: {
            padding: "16px 22px",
        },

        [SELECTORS.LINE_ANIMATION_CONTAINER]: {
            position: "relative",
            "&>*": {
                width: "100%",
                animation: `${animations.contentAppearing} .001s .5s both`,
            },
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
        },

        [SELECTORS.LENGTH_INDICATOR]: {
            animation: `${fadeSimple} .4s .8s both`,
        },

        [SELECTORS.OPTIONALITY_INDICATOR]: {
            width: "auto !important",
            left: "20px",
            top: "0px",
        },
    },
    "&.form-stage-is-changing": {
        [SELECTORS.CONTENT_ITEM]: {
            [SELECTORS.LINE_ANIMATION_CONTAINER]: {
                ".MuiInputLabel-root.MuiInputLabel-shrink": {
                    opacity: 0,
                },
                "&>*": {
                    animation: `${animations.contentDisappearing} .001s .5s both`,
                },
            },

            [SELECTORS.LENGTH_INDICATOR]: {
                animation: `${fadeSimpleOUT} .2s both`,
            },
        },
    },

    "&.GENERAL_PURPOSE": {
        [SELECTORS.CONTENT_ITEM]: {
            [SELECTORS.LINE_ANIMATION_CONTAINER]: {
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
        },
        "&.form-stage-is-changing": {
            [SELECTORS.CONTENT_ITEM]: {
                [SELECTORS.LINE_ANIMATION_CONTAINER]: {
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
    },
    "&.CONTACT_DETAILS": {
        [SELECTORS.CONTENT_ITEM]: {
            [SELECTORS.LINE_ANIMATION_CONTAINER]: {
                paddingLeft: "16px",
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
        },
        "&.form-stage-is-changing": {
            [SELECTORS.CONTENT_ITEM]: {
                [SELECTORS.LINE_ANIMATION_CONTAINER]: {
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
    },
}));
