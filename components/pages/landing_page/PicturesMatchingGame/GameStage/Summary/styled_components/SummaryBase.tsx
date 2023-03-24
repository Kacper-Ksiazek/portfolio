// Tools
import { styled, alpha } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Other components
import SmoothlyAppearingSection from "../../atoms/SmoothlyAppearingSection";

export default styled(SmoothlyAppearingSection)(({ theme }) => ({
    justifyContent: "flex-end",
    "strong.primary": {
        background: theme.palette.primary.main,
        padding: "0px 8px",
        borderRadius: "3px",
    },
    h3: {
        fontWeight: "700",
        animation: `${fadeSimple} .3s .5s both`,
        margin: "128px 0 24px 0",
    },
    p: {
        animation: `${fadeSimple} .3s .6s both`,
        fontSize: "20px",
        margin: 0,
        cursor: "default",
        textAlign: "center",
        "&.bottom": {
            marginTop: "32px",
        },
    },
    ul: {
        margin: "8px 0 16px 0",
        listStyleType: "none",
        li: {
            "&:not(&:nth-of-type(1))": {
                marginTop: "8px",
            },
            textAlign: "center",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            animation: `${fadeSimple} .3s 1s both`,
            "span.label": {
                marginRight: "12px",
            },
        },
    },
    "svg#background-svg": {
        fontSize: "32rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: alpha("#fff", 0.1),
        animation: `${fadeSimple} .3s 2s both linear`,
    },
    "@media (max-width:700px)": {
        h3: {
            fontSize: "2.6rem",
        },
        "p,span.label,button": {
            fontSize: "18px",
        },
    },
    "@media (max-width:500px)": {
        h3: {
            fontSize: "2.2rem",
        },
    },
}));
