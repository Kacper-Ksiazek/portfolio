// Tools
import { SOCIAL_MEDIA_LINKS } from "@/data/social_media_links";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import GitHub from "@mui/icons-material/GitHub";
// Other components
import ExternalRedirection from "./_SimpleExternalRedirection";

const GitHubIcon: FunctionComponent = () => {
    return (
        <ExternalRedirection
            icon={<GitHub />} //
            tooltip="Visit my GitHub profile"
            url={SOCIAL_MEDIA_LINKS.GITHUB}
        />
    );
};

export default GitHubIcon;
