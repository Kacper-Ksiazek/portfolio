// Tools
import { useState } from "react";
import { footerContext } from ".";
// Types
import type { FooterContent } from ".";
import type { FunctionComponent, ReactNode } from "react";

interface FooterContextProviderProps {
    children: ReactNode;
}

const FooterContextProvider: FunctionComponent<FooterContextProviderProps> = (props) => {
    const [contentToDisplay, setContentToDisplay] = useState<FooterContent>("LOGO");

    return (
        <footerContext.Provider
            value={{
                contentToDisplay,
                setContentToDisplay,
            }}
        >
            {props.children}
        </footerContext.Provider>
    );
};

export default FooterContextProvider;
