// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
// Other components
import Author from "./Author";
import SocialMediasIcons from "./SocialMediaIcons";
const FooterLogoAnimation = dynamic(() => import("./FooterLogoAnimation"), { ssr: false });
// Styled components
import FooterBase from "./Base";

const Footer: FunctionComponent = () => {
    return (
        <FooterBase>
            <FooterLogoAnimation />
            <SocialMediasIcons />
            <Author />
        </FooterBase>
    );
};

export default Footer;
