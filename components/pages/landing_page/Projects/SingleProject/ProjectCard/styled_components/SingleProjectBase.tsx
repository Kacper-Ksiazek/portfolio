// Tools
import { styled, alpha } from "@mui/system";
import { shapesOnHoverAnimations } from "@/components/pages/_shared/single-project/Thumbnail/onHover";

// Styled components
export default styled("div")(({ theme }) => ({
    width: "calc(50% - 100px)",
    minHeight: "250px",
    position: "relative",
    display: "flex",
    padding: "8px",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",

    ".thumbnail-wrapper": {
        height: "200px",
        width: "240px",
    },
    "&.odd": {
        ".single-project-text-content-wrapper": {
            marginLeft: "20px",
        },
        "&::before": {
            left: 0,
        },
    },
    "&.even": {
        ".single-project-text-content-wrapper": {
            marginRight: "20px",
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
        background: alpha(theme.palette.secondary.main, 0.1),
        borderRadius: "3px",
        transition: "width .3s ease-out, transform .3s linear, background .3s linear",
    },
    "&:hover": {
        "&::before": {
            width: "130%",
            background: alpha(theme.palette.secondary.main, 0.05),
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
}));
