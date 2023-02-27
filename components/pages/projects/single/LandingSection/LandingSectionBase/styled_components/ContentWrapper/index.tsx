// Tools
import RWD from "./RWD";
import { styled, alpha } from "@mui/material";
import introAnimations from "./animations/intro";
import contentAppearing from "./animations/content_appearing";
import contentDisappearing from "./animations/content_disappearing";
// Styled components
import ContentWrapperBase from "@/components/atoms/content_placement/SectionWrapper/_ContentWrapper";

export default styled(ContentWrapperBase)(({ theme }) => ({
    color: "white",
    zIndex: 10,
    cursor: "default",
    marginBottom: "25vh",

    ".duration": {
        fontSize: "20px",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        top: "-50px",
        left: " -20px",
        width: "100px",
        background: alpha(theme.palette.primary.main, 0.12),
        height: "530px",
        zIndex: -1,
        transition: "width .3s",
        borderRadius: "3px",
    },
    "&.hide-content": contentDisappearing,
    "&.display-content": contentAppearing,
    "&.intro-animation": introAnimations,
    //
    ".duration, #project-title, .technologies-wrapper, #project-description, .redirect": {
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: theme.palette.secondary.main,
            zIndex: 11,
        },
    },
    ...(RWD as any),
}));
