// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Styled components
import Rectangle from "./Rectangle";
import PictureWrapper from "./PictureWrapper";

export { Rectangle, PictureWrapper };

export const PictureSectionWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    position: "relative",
    overflow: "hidden",
    aspectRatio: "16 / 9",
    "&.play-intro-animation": {
        animation: `${fadeSimple} .5s .5s both`,
    },
}));

export const PictureBase = styled("div")(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    background: theme.palette.primary.main,
}));
