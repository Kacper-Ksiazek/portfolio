// Tools
import * as keyframes from "./keyframes";
import { styled, alpha } from "@mui/material";
// Styled components
import _ContentWrapper from "@/components/atoms/content_placement/SectionWrapper/_ContentWrapper";

export default styled(_ContentWrapper)(({ theme }) => ({
    color:
        theme.palette.mode === "light" //
            ? alpha(theme.palette.secondary.main, 0.07)
            : alpha("#fff", 0.05),

    "@media (min-width:1001px)": {
        fontSize: "1000px",
        fontWeight: 900,
        position: "absolute",
        bottom: "0",
        userSelect: "none",
        zIndex: 1,
        left: "50%",
        transform: "translateX(-50%)",
        lineHeight: "800px",
        fontFamily: "Montserrat Alternates",
        "&.initial_hide": {
            display: "none",
        },
        "&.intro": {
            animation: `${keyframes.intro} .3s 1s linear both`,
        },
        "&.outro": {
            animation: `${keyframes.outro} .3s linear both`,
        },
    },
    "@media (max-width:1000px)": {
        display: "none",
    },
}));
