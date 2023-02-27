// Tools
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components

const BackgroundPictureWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "&::before, &::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    "&::before": {
        zIndex: 6,
        background: theme.palette.background.paper,
    },
    "&::after": {
        zIndex: 8,
        background: alpha(theme.palette.background.paper, 0.7),
        transition: "background 1s",
    },
    "&.add-blur-transition-keyframe": {
        "#landing-page-picture": {
            filter: "blur(10px)",
        },
    },
    "&.scroll-button-is-hovered": {
        "&::after": {
            background: alpha(theme.palette.background.paper, 0.6),
        },
        "#landing-page-picture": {
            filter: "blur(0px)",
            transform: "scale(1.1)",
            backgroundPosition: "center bottom",
        },
    },
}));
const BackgroundPictureImage = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0%",
    left: "0%",
    zIndex: 7,
    width: "calc(100% + 32px)",
    height: "calc(100% + 32px)",
    backgroundSize: "cover",
    filter: "blur(10px)",
    transition: "transform 1s, background-position 60s linear, filter 2s",
    backgroundPosition: "center top",
    backgroundImage: `url('./images/landing-page/introduction-screen/${theme.palette.mode}/fullsize.jpg')`,
    ["@media (max-width:1450px)"]: {
        backgroundImage: `url('./images/landing-page/introduction-screen/${theme.palette.mode}/width1450px.jpg')`,
    },
    ["@media (max-width:1000px)"]: {
        backgroundImage: `url('./images/landing-page/introduction-screen/${theme.palette.mode}/width1000px.jpg')`,
    },
    ["@media (max-width:750px)"]: {
        backgroundImage: `url('./images/landing-page/introduction-screen/${theme.palette.mode}/width750px.jpg')`,
    },
}));

const BackgroundPicture: FunctionComponent<{ scrollButtonIsHovered: boolean }> = (props) => {
    const [addBlurTransitionKeyframe, setAddBlurTransitionKeyframe] = useState<boolean>(false);

    useEffect(() => {
        if (props.scrollButtonIsHovered) {
            setAddBlurTransitionKeyframe(true);
        }
    }, [props.scrollButtonIsHovered]);

    return (
        <BackgroundPictureWrapper
            id="landing-page-picture-wrapper"
            className={[
                props.scrollButtonIsHovered ? "scroll-button-is-hovered" : "", //
                addBlurTransitionKeyframe ? "add-blur-transition-keyframe" : "",
            ].join(" ")}
        >
            <BackgroundPictureImage id="landing-page-picture" />
        </BackgroundPictureWrapper>
    );
};

export default BackgroundPicture;
