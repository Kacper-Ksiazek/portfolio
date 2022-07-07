// Tools
import useDisplayScrollButton from "./hooks/useDisplayScrollButton";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Components
import Fade from "@mui/material/Fade";
// Material UI Icons
import ArrowUpward from "@mui/icons-material/ArrowUpward";
// Styled Components
import StyledButtonBase from "./styled_components/StyledButtonBase";

const ScrollButton: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const displayButton = useDisplayScrollButton();
    const handleScroll = () => scrollTo({ left: 0, top: 0, behavior: "smooth" });

    return (
        <Fade in={displayButton}>
            <StyledButtonBase onClick={handleScroll}>
                <ArrowUpward />
            </StyledButtonBase>
        </Fade>
    );
};

export default ScrollButton;
