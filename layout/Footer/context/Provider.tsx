// Tools
import { footerContext } from ".";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// Types
import type { FooterContent } from ".";
import type { FunctionComponent, ReactNode } from "react";

interface FooterContextProviderProps {
    children: ReactNode;
}

const FooterContextProvider: FunctionComponent<FooterContextProviderProps> = (props) => {
    const [contentToDisplay, setContentToDisplay] = useState<FooterContent>("LOGO");
    const router = useRouter();

    // Set content to display on route change
    useEffect(() => {
        setContentToDisplay("LOGO");
    }, [router.pathname]);

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
