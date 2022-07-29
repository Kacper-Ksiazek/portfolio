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
    "&:nth-of-type(1)": {
        marginTop: "0px !important",
    },
    "&.year-indicating": {
        marginTop: "160px",
    },

    ".thumbnail-wrapper": {
        height: "200px",
        width: "240px",
    },
    "&:nth-of-type(odd)": {
        ".single-project-text-content-wrapper": {
            marginRight: "20px",
        },
        "&::before": {
            right: 0,
        },
        ".year-indicator": {
            right: "-700px",
        },
    },
    "&:nth-of-type(even)": {
        alignSelf: "flex-end",
        flexDirection: "row-reverse",
        ".single-project-text-content-wrapper": {
            marginLeft: "20px",
        },
        "&::before": {
            left: 0,
        },
        ".year-indicator": {
            left: "-700px",
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
        transition: "width .3s ease-out, transform .3s linear",
    },
    "&:hover": {
        "&::before": {
            width: "120%",
        },
        "&:nth-of-type(odd)": {
            "&::before": {
                transform: "skewX(5deg) translateX(50px) scaleY(1.1)",
            },
        },
        "&:nth-of-type(even)": {
            "&::before": {
                transform: "skewX(-5deg) translateX(-50px) scaleY(1.1)",
            },
        },
        ".thumbnail-wrapper": {
            ...(shapesOnHoverAnimations as any),
        },
    },
}));
