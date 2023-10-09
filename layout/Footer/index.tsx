// Tools
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import Author from "./Author";
import FooterContent from "./Content";
import Redirections from "./Redirections";
import SocialMediasIcons from "./SocialMediaIcons";
import FooterContextProvider from "./context/Provider";
// Styled components
import FooterBase from "./Base";

const Footer: FunctionComponent = () => {
    const [renderFooterContent, setRenderFooterContent] = useState<boolean>(false);

    // Do not render the content if javascript is disabled by your browser
    useEffect(() => {
        setRenderFooterContent(true);
    }, []);

    return (
        <FooterContextProvider>
            <FooterBase>
                {renderFooterContent && <FooterContent />}

                <Redirections />
                <SocialMediasIcons />
                <Author />
            </FooterBase>
        </FooterContextProvider>
    );
};

export default Footer;
