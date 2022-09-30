// Tools
import { styled } from "@mui/system";
import onHoverStyles from "./onHoverStyles";
// Styled components
import Section from "@/components/atoms/content_placement/SectionWrapper/Light/LightWrapperBase";

export default styled(Section)(({ theme }) => ({
    borderRadius: "",
    background: theme.palette.background.paper,
    zIndex: 1000,
    minHeight: "calc(100vh - 40px)",
    alignItems: "flex-end",
    display: "flex",
    paddingTop: "0 !important",
    paddingBottom: "0px !important",
    marginBottom: "60px",
    //
    "&.is-hovered": {
        ...(onHoverStyles as any),
    },
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
    ["@media (max-width:500px)"]: {
        minHeight: "calc(100vh - 20px)",
    },
}));
