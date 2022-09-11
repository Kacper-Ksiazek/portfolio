// Tools
import { styled } from "@mui/system";
import onHoverStyles from "./onHoverStyles";
// Styled components
import Section from "@/components/_styled_components/content_placement/SectionWrapper/Light/LightWrapperBase";

export default styled(Section)(({ theme }) => ({
    borderRadius: "",
    top: "-100px",
    background: theme.palette.background.paper,
    zIndex: 1000,
    height: "calc(100vh - 40px)",
    //
    "&.is-hovered": onHoverStyles,
    // Styled
    "&.preview-mode": {
        img: {
            transform: "scale(1)",
        },
        "#project-landing-screen-image-mask": {
            opacity: 0,
            transition: "opacity 1s .5s",
        },
    },
}));
