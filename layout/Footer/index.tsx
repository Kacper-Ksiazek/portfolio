// Types
import type { FunctionComponent } from "react";
// Other components
import Author from "./Author";
// Styled components
import FooterBase from "./Base";

const Footer: FunctionComponent = () => {
    return (
        <FooterBase>
            <Author />
        </FooterBase>
    );
};

export default Footer;
