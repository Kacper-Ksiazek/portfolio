// Tools
import { CSS_REFERENCES } from "./css_references";
import { useFooterContext } from "../../hooks/useFooterContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import PhoneIcon from "@mui/icons-material/Phone";

const PhoneNumber: FunctionComponent = () => {
    const { contentToDisplay, setContentToDisplay } = useFooterContext();

    function seePhoneNumberAdress() {
        setContentToDisplay((val) => (val === "EMAIL" ? "LOGO" : "EMAIL"));
    }

    return (
        <Tooltip title="Reveal my phone number" placement="top">
            <span className={CSS_REFERENCES.SOCIAL_MEDIA_ICON}>
                <PhoneIcon
                    onClick={seePhoneNumberAdress} //
                    className={contentToDisplay === "PHONE_NUMBER" ? "active" : ""}
                />
            </span>
        </Tooltip>
    );
};

export default PhoneNumber;
