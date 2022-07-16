// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Close from "@mui/icons-material/Close";
import Fullscreen from "@mui/icons-material/Fullscreen";
import FullscreenExit from "@mui/icons-material/FullscreenExit";
// Styled components
import SingleTopSideButton from "./_styled_components/SingleTopSideButton";
import TopSideButtonsWrapper from "./_styled_components/TopSideButtonsWrapper";

interface TopSideButtonsProps {
    handleCloseModal: () => void;
    handleFullsizeToggle: () => void;
    fullscreenIsOpen: boolean;
}

const TopSideButtons: FunctionComponent<TopSideButtonsProps> = (props) => {
    return (
        <TopSideButtonsWrapper>
            <Tooltip title={`${props.fullscreenIsOpen ? "Close" : "Open"} fullscreen mode`}>
                <SingleTopSideButton onClick={props.handleFullsizeToggle}>
                    {props.fullscreenIsOpen ? <FullscreenExit /> : <Fullscreen />}
                    {/*  */}
                </SingleTopSideButton>
            </Tooltip>

            <Tooltip title={`Close modal`}>
                <SingleTopSideButton onClick={props.handleCloseModal}>
                    <Close />
                </SingleTopSideButton>
            </Tooltip>
        </TopSideButtonsWrapper>
    );
};

export default TopSideButtons;
