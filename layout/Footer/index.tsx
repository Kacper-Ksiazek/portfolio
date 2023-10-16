// Tools
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
// Other components
import EnabledJavascriptContent from "./EnabledJavascriptContent";
import DisabledJavascriptContent from "./DisabledJavascriptContent";

const Footer: FunctionComponent = () => {
    const [javascriptIsEnabled, setJavascriptIsEnabled] = useState<boolean>(false);

    // Do not render the content if javascript is disabled by your browser
    useEffect(() => {
        setJavascriptIsEnabled(true);
    }, []);

    if (javascriptIsEnabled) return <EnabledJavascriptContent />;
    return <DisabledJavascriptContent />;
};

export default Footer;
