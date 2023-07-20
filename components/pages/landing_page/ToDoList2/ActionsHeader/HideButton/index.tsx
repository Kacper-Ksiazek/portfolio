// Types
import type { FunctionComponent, MouseEvent } from "react";
// Material UI Icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

// Styled components
import HideButtonBase from "./Base";

interface HideButtonProps {
    renderContent: boolean;
    preventOnClick: boolean;
    contentIsHidden: boolean;

    wrapperID?: string;

    toggleContentVisibility: () => void;
}

const HideButton: FunctionComponent<HideButtonProps> = (props) => {
    function onClick(e: MouseEvent<HTMLButtonElement>) {
        (e.target as HTMLButtonElement).blur();

        if (props.preventOnClick) return;
        props.toggleContentVisibility();

        if (props.wrapperID) {
            const wrapper = document.getElementById(props.wrapperID);
            if (wrapper) {
                wrapper.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    }

    return (
        <HideButtonBase color="MUIFormElement" onClick={onClick as any}>
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
