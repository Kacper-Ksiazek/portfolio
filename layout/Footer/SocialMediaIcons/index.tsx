// Types
import type { FunctionComponent } from "react";
// Other components
import { Facebook, GitHub, LinkedIn, Email, PhoneNumber } from "./Icons";
// Styled components
import SocialMediasIconsBase from "./Base";

const SocialMediasIcons: FunctionComponent = () => {
    return (
        <SocialMediasIconsBase>
            <LinkedIn />
            <GitHub />
            <Facebook />
            <Email />
            <PhoneNumber />
        </SocialMediasIconsBase>
    );
};

export default SocialMediasIcons;
