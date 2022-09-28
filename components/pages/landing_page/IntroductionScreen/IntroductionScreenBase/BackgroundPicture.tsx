// Tools
import { keyframes } from "@mui/system";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Styled components
const filterBlurOnHoverStart = keyframes({
    from: {
        filter: "blur(10px)",
    },
    to: {
        filter: "blur(0px)",
    },
});
const filterBlurOnHoverEnd = keyframes({
    from: {
        filter: "blur(0px)",
    },
    to: {
        filter: "blur(10px)",
    },
});

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
            animation: `${filterBlurOnHoverEnd} 1s both`,
        },
    },
    "&.scroll-button-is-hovered": {
        "&::after": {
            background: alpha(theme.palette.background.paper, 0.6),
        },
        "#landing-page-picture": {
            filter: "blur(0px)",
            animation: `${filterBlurOnHoverStart} 1s both`,
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
    transition: "transform 1s, background-position 60s linear",
    backgroundPosition: "center top",
    backgroundImage: "url('./images/landing-page/introduction-screen/fullsize.jpg')",
    ["@media (max-width:1450px)"]: {
        backgroundImage: "url('./images/landing-page/introduction-screen/width1450px.jpg')",
    },
    ["@media (max-width:1000px)"]: {
        backgroundImage: "url('./images/landing-page/introduction-screen/width1000px.jpg')",
    },
    ["@media (max-width:750px)"]: {
        backgroundImage: "url('./images/landing-page/introduction-screen/width750px.jpg')",
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
