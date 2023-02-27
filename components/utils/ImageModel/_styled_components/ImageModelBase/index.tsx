// Tools
import RWD from "./RWD";
import { styled } from "@mui/material";
import * as intro from "@/components/keyframes/intro";
import * as outro from "@/components/keyframes/outro";

export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1920px",
    display: "flex",
    outline: "none !important",
    flexDirection: "column",
    justifyContent: "center",
    "div.imageWrapper": {
        position: "relative",
        flexGrow: "1",
        "&.intro": {
            animation: `${intro.fadeFromBottom} .2s linear both`,
            ".gallery-navigation-button": {
                animation: `${intro.fadeSimple} .2s .5s linear both`,
            },
        },
        "&.outro": {
            animation: `${outro.fadeToTop} .2s linear both`,
            ".gallery-navigation-button": {
                animation: `${outro.fadeSimpleOUT} .2s .5s linear both`,
            },
        },
    },
    img: {
        userSelect: "none",
    },
    ...(RWD as any),
}));
