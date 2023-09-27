// Tools
import { useFooterContext } from "../hooks/useFooterContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Phone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// Other components
import { Facebook, GitHub, LinkedIn } from "./Icons";
// Styled components
import SocialMediasIconsBase from "./Base";

const SocialMediasIcons: FunctionComponent = () => {
    const { contentToDisplay, setContentToDisplay } = useFooterContext();

    function seePhoneNumber() {
        setContentToDisplay((val) => (val === "PHONE_NUMBER" ? "LOGO" : "PHONE_NUMBER"));
    }

    function seeEmailAdress() {
        setContentToDisplay((val) => (val === "EMAIL" ? "LOGO" : "EMAIL"));
    }

    return (
        <SocialMediasIconsBase>
            <LinkedIn />

            <GitHub />

            <Tooltip title="Reveal my email address" placement="top">
                <EmailIcon
                    onClick={seeEmailAdress} //
                    className={contentToDisplay === "EMAIL" ? "active" : ""}
                />
            </Tooltip>

            <Facebook />

            <Tooltip title="Reveal my phone number" placement="top">
                <Phone
                    onClick={seePhoneNumber} //
                    className={contentToDisplay === "PHONE_NUMBER" ? "active" : ""}
                />
            </Tooltip>
        </SocialMediasIconsBase>
    );
};

export default SocialMediasIcons;
