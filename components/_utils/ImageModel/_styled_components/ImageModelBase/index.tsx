// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/_keyframes/outro/fadeSimpleOUT";
import fadeToTop from "@/components/_keyframes/outro/fadeToTop";
import fadeFromBottom from "@/components/_keyframes/intro/fadeFromBottom";

export default styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50vw",
    transform: "translate(-50%, -50%)",
    maxWidth: "1920px",
    display: "flex",
    outline: "none !important",
    flexDirection: "column",
    "div.imageWrapper": {
        position: "relative",
        flexGrow: "1",
        "&.intro": {
            animation: `${fadeFromBottom} .2s linear both`,
            ".gallery-navigation-button": {
                animation: `${fadeSimple} .2s .5s linear both`,
            },
        },
        "&.outro": {
            animation: `${fadeToTop} .2s linear both`,
            ".gallery-navigation-button": {
                animation: `${fadeSimpleOUT} .2s .5s linear both`,
            },
        },
    },
    img: {
        userSelect: "none",
    },
    ...(RWD as any),
}));
