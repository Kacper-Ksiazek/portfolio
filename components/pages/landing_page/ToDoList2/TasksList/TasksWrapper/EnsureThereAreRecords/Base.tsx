// Tools
import { styled, alpha } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";

// Styled components
export default styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    flexDirection: "column",
    userSelect: "none",
    paddingTop: "64px",
    animation: `${fadeSimple} .3s`,
    svg: {
        fontSize: "128px",
        marginBottom: "12px",
    },
    h2: {
        fontSize: "36px",
        margin: "0 0 0px 0",
    },
    p: {
        margin: 0,
        fontSize: "18px",
        color: alpha("#fff", 0.8),
    },

    "@media (max-height:880px)": {
        paddingTop: "32px",
    },
    "@media (max-height:800px)": {
        paddingTop: "16px",
    },
    "@media (max-height:750px)": {
        paddingTop: "0px",
    },
}));
