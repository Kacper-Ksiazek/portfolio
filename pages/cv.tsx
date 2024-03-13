// Tools
import { useEffect } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { NextPage } from "next";
// Other components
import Head from "next/head";
import * as CVComponents from "@/components/pages/cv";
import * as CVScreens from "@/components/pages/cv/screens";

const CVPage: React.FunctionComponent = () => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const { cvToDownload } = useCVContext();
    const { width } = useWindowSizes();

    useEffect(() => {
        disableUserScroll();

        return () => {
            enableUserScroll();
            showNavigationBar();
        };
    }, [disableUserScroll, enableUserScroll, hideNavigationBar, showNavigationBar]);

    function handleOpenPDFPreview() {
        const { variant, lang } = cvToDownload;

        const CVFile = getParticularCV({
            clientSide: true, //
            format: "pdf",
            lang,
            variant,
        });

        window.open(CVFile.path, "_blank");
    }

    return (
        <>
            <Head>
                <title>Kacper Książek | CV</title>
            </Head>

            <CVComponents.PageWrapper>
                {(() => {
                    if (width > 1000) {
                        return <CVScreens.Desktop handleOpenPDFPreview={handleOpenPDFPreview} />;
                    } else {
                        return <CVScreens.Mobile handleOpenPDFPreview={handleOpenPDFPreview} />;
                    }
                })()}
            </CVComponents.PageWrapper>
        </>
    );
};

const CVPageWithContext: NextPage = () => {
    return (
        <CVComponents.CVContextProvider>
            <CVPage />
        </CVComponents.CVContextProvider>
    );
};

export default CVPageWithContext;
