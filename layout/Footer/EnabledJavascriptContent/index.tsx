// Tools
import { stylesWhenVisible } from "./styles_when_visible";
// Types
import type { FunctionComponent } from "react";
// Other components
import FooterContextProvider from "../context/Provider";
// Styled components
import Author from "../Author";
import FooterBase from "../Base";
import FooterContent from "../Content";
import Redirections from "../Redirections";
import SocialMediasIcons from "../SocialMediaIcons";
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";

const EnabledJavascriptContent: FunctionComponent = () => {
    return (
        <FooterContextProvider>
            <FooterBase>
                <FooterContent />
                <TransformWhenVisible
                    to={stylesWhenVisible} //
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    rootMargin={0}
                >
                    <Redirections />
                    <SocialMediasIcons />
                    <Author />
                </TransformWhenVisible>
            </FooterBase>
        </FooterContextProvider>
    );
};

export default EnabledJavascriptContent;
