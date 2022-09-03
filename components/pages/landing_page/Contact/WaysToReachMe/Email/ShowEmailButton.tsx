// Types
import type { FunctionComponent, Dispatch, SetStateAction } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Visibility from "@mui/icons-material/Visibility";
// Styled components
import EmailManagingButtonBase from "./styled_components/EmailManagingButtonBase";

interface ShowEmailButtonProps {
    showEmail: boolean;
    setShowEmail: Dispatch<SetStateAction<boolean>>;
}

const ShowEmailButton: FunctionComponent<ShowEmailButtonProps> = (props) => {
    return (
        <Fade in={!props.showEmail}>
            <Tooltip title="Show email address" placement="top">
                <EmailManagingButtonBase
                    onClick={() => props.setShowEmail(true)} //
                    color="text"
                >
                    <Visibility />
                </EmailManagingButtonBase>
            </Tooltip>
        </Fade>
    );
};

export default ShowEmailButton;
