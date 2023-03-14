// Tools
import RWD from "./RWD";
import { styled, alpha } from "@mui/material";
import { shapesOnHoverAnimations } from "@/components/atoms/single_project/Thumbnail/onHover";

// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% - 100px)",
    minHeight: "250px",
    position: "relative",
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",

    "&.odd": {
        flexDirection: "row-reverse",
        paddingLeft: "12px",
        ".single-project-text-content-wrapper": {
            marginLeft: "16px",
        },
        "&::before": {
            left: 0,
        },
    },
    "&.even": {
        paddingRight: "12px",
        ".single-project-text-content-wrapper": {
            marginRight: "16px",
        },
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
        ".thumbnail-wrapper": {
            ...(shapesOnHoverAnimations as any),
        },
    },
    //
    ...(RWD as any),
}));
