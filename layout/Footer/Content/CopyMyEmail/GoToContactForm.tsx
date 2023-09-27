// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import MailOutline from "@mui/icons-material/MailOutline";
// Styled components
import Tooltip from "@mui/material/Tooltip";

const RedirectionButton = styled(StyledButton)(({ theme }) => ({
    height: "42px",
    padding: "0 36px",
}));

const GoToContactForm: FunctionComponent = () => {
    return (
        <Tooltip title="Go to the contact panel of my portfolio" placement="top">
            <RedirectionButton componentThemeID="MUI" subtleHoverEffect>
                <MailOutline sx={{ mr: "6px" }} />
                {"Use portfolio's contact form"}
            </RedirectionButton>
        </Tooltip>
    );
};

export default GoToContactForm;
