// Types
import type { FunctionComponent } from "react";
// Other components
import Author from "./Author";
import FooterContent from "./Content";
import SocialMediasIcons from "./SocialMediaIcons";
import FooterContextProvider from "./context/Provider";
// Styled components
import FooterBase from "./Base";

const Footer: FunctionComponent = () => {
    return (
        <FooterContextProvider>
            <FooterBase>
                <FooterContent />

                <SocialMediasIcons />
                <Author />
            </FooterBase>
        </FooterContextProvider>
    );
};

export default Footer;
