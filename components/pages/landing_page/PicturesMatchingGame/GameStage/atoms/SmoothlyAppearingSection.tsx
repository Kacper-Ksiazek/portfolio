// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Styled components

export default styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ">*": {
        animation: `${fadeSimple} .4s linear both`,
        animationDelay: ".2s",
        "&.delay-1": {
            animationDelay: ".4s",
        },
        "&.delay-2": {
            animationDelay: ".6s",
        },
        "&.delay-3": {
            animationDelay: ".8s",
        },
    },
    "@media (min-height:840px)": {
        "&.extra-delay": {
            ">*": {
                animationDelay: "1.2s",
                "&.delay-1": {
                    animationDelay: "1.4s",
                },
                "&.delay-2": {
                    animationDelay: "1.6s",
                },
                "&.delay-3": {
                    animationDelay: "1.8s",
                },
            },
        },
    },
}));
