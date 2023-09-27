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
        setContentToDisplay((val) => (val === "PHONE_NUMBER" ? "LOGO" : "PHONE_NUMBER"));
    }

    return (
        <Tooltip title="Reveal my phone number" placement="top">
            <span
                onClick={seePhoneNumberAdress} //
                className={[
                    CSS_REFERENCES.SOCIAL_MEDIA_ICON, //
                    contentToDisplay === "PHONE_NUMBER" ? CSS_REFERENCES.ACTIVE_SOCIAL_MEDIA_ICON : "",
                ].join(" ")}
            >
                <PhoneIcon />
            </span>
        </Tooltip>
    );
};

export default PhoneNumber;
