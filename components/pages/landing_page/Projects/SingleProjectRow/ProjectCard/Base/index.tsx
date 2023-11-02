// Tools
import RWD from "./RWD";
import { styled, alpha } from "@mui/material";
import { shapesOnHoverAnimations } from "@/components/atoms/single_project/Thumbnail/onHover";
import { SELECTORS } from "../../css_references";
import { SELECTORS as THUMBNAIL } from "components/atoms/single_project/Thumbnail/css_references";

// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% - 100px)",
    minHeight: "250px",
    position: "relative",
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",

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
            background: "#fff",
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
            width: "calc(100% - 8px) !important",
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
    },

    "&.odd": {
        flexDirection: "row-reverse",
        paddingLeft: "12px",
        "&::before": {
            left: 0,
        },
    },
    "&.even": {
        paddingRight: "12px",
        "&::before": {
            right: 0,
        },
    },
    "&::before": {
        content: "''",
        top: 0,
        position: "absolute",
        height: "100%",
        width: "80px",
        background:
            theme.palette.mode === "light" //
                ? alpha(theme.palette.secondary.main, 0.1)
                : alpha("#fff", 0.05),
        borderRadius: "3px",
        transition: "width .3s ease-out, transform .3s linear, background .3s linear",
    },
    "&:hover": {
        "&::before": {
            width: "130%",
        },
        "&.odd": {
            "&::before": {
                transform: "skewX(-5deg) translateX(-50px) scaleY(1.1)",
            },
        },
        "&.even": {
            "&::before": {
                transform: "skewX(5deg) translateX(50px) scaleY(1.1)",
            },
        },
        [THUMBNAIL.WRAPPER]: {
            ...(shapesOnHoverAnimations as any),
        },
    },
    //
    ...(RWD as any),
}));
