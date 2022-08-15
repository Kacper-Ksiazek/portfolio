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
    ".intro-bar1, .intro-bar2": {
        position: "absolute",
    },
    "&.odd": {
        flexDirection: "row-reverse",
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
    ["@media (max-width:1300px)"]: {
        width: "calc(50% + 40px)",
        marginBottom: "32px",
    },
    ["@media (max-width:1100px)"]: {
        width: "calc(50% + 90px)",
    },
    ["@media (max-width:1000px)"]: {
        width: "100%",
        marginBottom: "48px",
        ".thumbnail-wrapper": {
            height: "240px",
            width: "320px",
        },
    },
    ["@media (max-width:800px)"]: {
        ".thumbnail-wrapper": {
            height: "200px",
            width: "240px",
        },
    },
    ["@media (max-width:750px)"]: {
        maxWidth: "500px",
        "&.even": {
            flexDirection: "column-reverse",
        },
        "&.odd": {
            flexDirection: "column-reverse",
        },
        ".thumbnail-wrapper": {
            height: "280px",
            width: "500px",
            marginBottom: "16px",
        },
        ".single-project-text-content-wrapper": {
            width: "100%",
            margin: "0 !important",
            ".MuiTypography-body2, .duration": {
                fontSize: "16px",
                svg: {
                    fontSize: "24px",
                },
            },
        },
    },
    ["@media (max-width:580px)"]: {
        ".thumbnail-wrapper": {
            height: "280px",
            width: "100%",
        },
    },
    ["@media (max-width:420px)"]: {
        ".thumbnail-wrapper": {
            height: "240px",
        },
    },
}));
