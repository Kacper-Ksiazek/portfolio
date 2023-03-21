// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Other components
import PictureWrapper from "./PictureWrapper";
import BackgroundRectangle from "./BackgroundRectrangle";

export { BackgroundRectangle, PictureWrapper };

export const ImageDirectWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    background: theme.palette.primary.main,
}));

export const PictureSection = styled("section")(({ theme }) => ({
    width: "calc(50% - 50px)",
    position: "relative",
    overflow: "hidden",
    aspectRatio: "16 / 9",
    "&.play-intro-animation": {
        animation: `${fadeSimple} .5s .5s both`,
    },
}));
