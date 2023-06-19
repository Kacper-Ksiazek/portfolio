// Tools
// Types
import type { FunctionComponent } from "react";
// Other components
import StyledButton from "components/atoms/forms/StyledButton";
// Material UI Icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

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
        <StyledButton
            color="MUIFormElement"
            onClick={onClick}
            sx={{
                padding: " 0px 0",
                height: "42px",
                width: "86px",
                justifyContent: "flex-start",
            }}
        >
            <KeyboardArrowDownRoundedIcon
                sx={{
                    transform: `rotate(${props.renderContent ? 180 : 0}deg)`, //
                    width: "32px",
                    transition: "transform .3s",
                }}
            />

            <span>{props.renderContent ? "Hide" : "Show"}</span>
        </StyledButton>
    );
};

export default HideButton;
