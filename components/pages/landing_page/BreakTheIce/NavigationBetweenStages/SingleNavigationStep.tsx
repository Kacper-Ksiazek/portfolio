// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
// Styled components
export default styled("div")(({ theme }) => ({
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    padding: "0 10px",
    transition: "background .2s",
    borderRadius: "3px",
    "&:nth-of-type(1)": {
        animation: `${fadeSimple} .2s .6s both linear`,
    },
    "&:nth-of-type(2)": {
        animation: `${fadeSimple} .2s .7s both linear`,
    },
    "&:nth-of-type(3)": {
        animation: `${fadeSimple} .2s .8s both linear`,
    },
    "&:nth-of-type(4)": {
        animation: `${fadeSimple} .2s .9s both linear`,
    },
    "&:before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        background: theme.palette.secondary.main,
        width: "100%",
        height: "100%",
        transition: "transform .2s, background .3s",
        transform: "translateY(-100%)",
    },
    "&:nth-of-type(even)": {
        "&:before": {
            transform: "translateY(-100%)",
        },
    },
    "&:nth-of-type(odd)": {
        "&:before": {
            transform: "translateY(100%)",
        },
    },
    "span.text": {
        position: "relative",
        zIndex: 1,
        transition: "color .2s",
    },
    "&:hover": {
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            transform: "translateY(0%)",
        },
    },
    "&.selected": {
        background: theme.palette.primary.main,
        "span.text": {
            color: "#fff",
        },
        "&:before": {
            background: theme.palette.primary.main,
        },
    },
}));
