// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Phone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// Other components
import { Facebook, GitHub, LinkedIn } from "./Icons";
// Styled components
import SocialMediasIconsBase from "./Base";

const SocialMediasIcons: FunctionComponent = () => {
    return (
        <SocialMediasIconsBase>
            <LinkedIn />
            <GitHub />
            <EmailIcon />
            <Facebook />
            <Phone />
        </SocialMediasIconsBase>
    );
};

export default SocialMediasIcons;
