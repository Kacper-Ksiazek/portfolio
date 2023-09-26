// Tools
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import LinkedIn from "@mui/icons-material/LinkedIn";
// Other components
import ExternalRedirection from "./_SimpleExternalRedirection";

const LinkedInIcon: FunctionComponent = () => {
    return (
        <ExternalRedirection
            icon={<LinkedIn />} //
            tooltip="Visit my LinkedIn profile"
            url={SOCIAL_MEDIA_LINKS.LINKEDIN}
        />
    );
};

export default LinkedInIcon;
