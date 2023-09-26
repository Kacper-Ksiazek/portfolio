// Tools
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Facebook from "@mui/icons-material/Facebook";
// Other components
import ExternalRedirection from "./_SimpleExternalRedirection";

const FacebookIcon: FunctionComponent = () => {
    return (
        <ExternalRedirection
            icon={<Facebook />} //
            tooltip="Visit my Facebook profile"
            url={SOCIAL_MEDIA_LINKS.FACEBOOK}
        />
    );
};

export default FacebookIcon;
