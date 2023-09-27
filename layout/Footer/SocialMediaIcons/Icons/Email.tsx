// Tools
import { CSS_REFERENCES } from "./css_references";
import { useFooterContext } from "../../hooks/useFooterContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import EmailIcon from "@mui/icons-material/Email";

const Email: FunctionComponent = () => {
    const { contentToDisplay, setContentToDisplay } = useFooterContext();

    function seeEmailAdress() {
        setContentToDisplay((val) => (val === "EMAIL" ? "LOGO" : "EMAIL"));
    }

    return (
        <Tooltip title="Reveal my email address" placement="top">
            <span
                onClick={seeEmailAdress} //
                className={[
                    CSS_REFERENCES.SOCIAL_MEDIA_ICON, //
                    contentToDisplay === "EMAIL" ? CSS_REFERENCES.ACTIVE_SOCIAL_MEDIA_ICON : "",
                ].join(" ")}
            >
                <EmailIcon />
            </span>
        </Tooltip>
    );
};

export default Email;
