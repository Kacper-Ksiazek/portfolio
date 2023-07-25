// Types
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Visibility from "@mui/icons-material/Visibility";
// Styled components
import WayToReachMeButton from "../WayToReachMeButton";

interface ShowEmailButtonProps {
    showPhone: boolean;
    setShowPhone: Dispatch<SetStateAction<boolean>>;
}

const ShowEmailButton: FunctionComponent<ShowEmailButtonProps> = (props) => {
    return (
        <Fade in={!props.showPhone}>
            <Tooltip title="Show email address" placement="top">
                <WayToReachMeButton onClick={() => props.setShowPhone(true)}>
                    <Visibility />
                </WayToReachMeButton>
            </Tooltip>
        </Fade>
    );
};

export default ShowEmailButton;
