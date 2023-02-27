// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import ButtonBase from "@mui/material/ButtonBase";
// Material UI Icons
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
// Styled components
const MobileButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    zIndex: "100",
    color: "#000",
    width: "48px",
    height: "48px",
    fontSize: "48px",
    transition: "color .3s",
    border: "none !important",
    svg: {
        position: "absolute",
        fontSize: "inherit",
    },
    ["@media (max-width:400px)"]: {
        width: "42px",
        height: "42px",
        fontSize: "42px",
    },
}));

interface MobileMenuButtonProps {
    isOpened: boolean;
    onClick: () => any;
}

const MobileMenuButton: FunctionComponent<MobileMenuButtonProps> = (props) => {
    return (
        <MobileButton onClick={props.onClick} id="mobile-menu-opener">
            <Fade in={!props.isOpened}>
                <Menu />
            </Fade>
            <Fade in={props.isOpened}>
                <Close />
            </Fade>
        </MobileButton>
    );
};

export default MobileMenuButton;
