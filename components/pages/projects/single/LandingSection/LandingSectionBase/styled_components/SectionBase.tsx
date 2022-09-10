// Tools
import { styled } from "@mui/system";
import onHoverStyles from "./onHoverStyles";
// Styled components
import Section from "@/components/_styled_components/content_placement/SectionWrapper/Light/LightWrapperBase";

export default styled(Section)(({ theme }) => ({
    borderRadius: "",
    top: "-100px",
    background: "red",
    zIndex: 1000,
    height: "calc(100vh - 40px)",
    //
    "&.is-hovered": onHoverStyles,
}));
