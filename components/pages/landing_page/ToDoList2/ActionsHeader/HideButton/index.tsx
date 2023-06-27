// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// Styled components
import HideButtonBase from "./Base";

interface HideButtonProps {
    renderContent: boolean;
    preventOnClick: boolean;
    contentIsHidden: boolean;

    toggleContentVisibility: () => void;
}

const HideButton: FunctionComponent<HideButtonProps> = (props) => {
    function onClick() {
        if (props.preventOnClick) return;
        props.toggleContentVisibility();
    }

    return (
        <HideButtonBase color="MUIFormElement" onClick={onClick}>
            <KeyboardArrowDownRoundedIcon
                sx={{
                    transform: `rotate(${props.renderContent ? 180 : 0}deg)`, //
                    width: "32px",
                    transition: "transform .3s",
                }}
            />

            <span>{props.renderContent ? "Hide" : "Show"}</span>
        </HideButtonBase>
    );
};

export default HideButton;
