// Tools
import { SELECTORS } from "../../css_references";
// Types
import type { SxPropsFn, Theme } from "@/@types/MUI";

export const stylesWhenThumbnailIsHidden: SxPropsFn = function (theme: Theme) {
    return {
        [`${SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER}, ${SELECTORS.THUMBNAIL.WRAPPER}`]: {
            transition: "width .2s .3s ease-out",
        },
        [SELECTORS.PROJECT_CARD.DESCRIPTION]: {
            maxHeight: "96px",
            overflowY: "hidden",
            transition: "max-height .3s .1s ease-out !important",
        },
        [SELECTORS.THUMBNAIL.WRAPPER]: {
            [SELECTORS.THUMBNAIL.CONTENT.DIRECT_IMG_WRAPPER]: {
                background: theme.palette.background.lightAnimationBar,
                img: {
                    transition: "opacity .2s .5s ease-out, transform .3s ease-out",
                },
            },
        },
        "&.hide-thumbnail": {
            [`${SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER}, ${SELECTORS.THUMBNAIL.WRAPPER}`]: {
                transition: "width .2s .4s ease-out",
            },
            [SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER]: {
                width: "calc(100% - 28px) !important",
            },
            [SELECTORS.PROJECT_CARD.DESCRIPTION]: {
                maxHeight: "150px",
            },
            [SELECTORS.THUMBNAIL.WRAPPER]: {
                width: "8px !important",
                [SELECTORS.THUMBNAIL.CONTENT.DIRECT_IMG_WRAPPER]: {
                    img: {
                        transition: "opacity .2s ease-out",
                        opacity: "0 !important",
                    },
                },
            },
            [SELECTORS.THUMBNAIL.CONTENT.BORDER_SHAPE]: {
                "&.big": {
                    "&.right": {
                        transform: "translate(36px, 7px)",
                    },
                    "&.left": {
                        transform: "translate(36px, -7px)",
                    },
                },
                "&.small": {
                    borderRadius: "5px",
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        width: "36px",
                        height: "10px",
                        transform: "translate(100%, -50%)",
                        background: theme.palette.secondary.main,
                    },
                },
            },

            "&.odd": {
                [SELECTORS.THUMBNAIL.CONTENT.BORDER_SHAPE]: {
                    left: "auto",
                    right: "88px !important",
                    "&.small": {
                        "&.right": {
                            transform: "translateX(92px)",
                        },
                        "&.left": {
                            transform: "translateX(92px)",
                        },
                        "&::before": {
                            left: "0",
                            transform: "translate(-100%, -50%)",
                            background: theme.palette.secondary.main,
                        },
                    },
                },
            },

            "&.even": {
                [SELECTORS.THUMBNAIL.CONTENT.BORDER_SHAPE]: {
                    right: "auto",
                    left: "16px !important",
                    "&.small": {
                        "&.right": {
                            transform: "translateX(-20px)",
                        },
                        "&.left": {
                            transform: "translateX(-20px)",
                        },
                        "&::before": {
                            right: "0",
                            transform: "translate(100%, -50%)",
                            background: theme.palette.secondary.main,
                        },
                    },
                },
            },
        },
    };
};
