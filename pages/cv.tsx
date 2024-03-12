// Tools
import { useEffect } from "react";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { NextPage } from "next";
// Other components
import Link from "next/link";
import Head from "next/head";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as CVComponents from "@/components/pages/cv";

const CVPage: React.FunctionComponent = () => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const { cvToDownload } = useCVContext();

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
                <Stack gap={1}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}

                    <Stack direction="row" spacing="8px" sx={{ a: { color: "white", textDecoration: "none" } }}>
                        <Link href="/?skip-introduction-screen-rectangle-animations=true">Home</Link>
                        <span>/</span>
                        <strong>CV</strong>
                    </Stack>

                    <h1 className="alternative-font-family">Curriculum vitae</h1>

                    <Stack direction="row" justifyContent="space-between">
                        <CVComponents.Actions.PickLanguage />
                        <CVComponents.Actions.PickColorTheme />
                    </Stack>

                    <p>
                        {formatTextViaBolding(
                            `
                            You can save my CV in either *PDF* or *PNG* format.
                            Also, you can preview it in your browser buit-in PDF viewer by clicking the *Open PDF preview* button or at the image itself.
                            ` //
                        )}
                    </p>

                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <CVComponents.Actions.OpenPDFPreviewButton handleOpenPDFPreview={handleOpenPDFPreview} />
                        <CVComponents.Actions.ShowQRCodeButton />

                        <CVComponents.Actions.SaveCVButton />
                        <CVComponents.Actions.PickFormat />
                    </Box>

                    <span style={{ flexGrow: 1 }}></span>

                    <CVComponents.Actions.GoHome />

                    <CVComponents.SocialMediaRedirections />
                </Stack>

                <CVComponents.CVPreview openPDFPreview={handleOpenPDFPreview} />
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
