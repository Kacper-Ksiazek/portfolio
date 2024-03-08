// Tools
import { useEffect, useState } from "react";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { NextPage } from "next";
import type { CV } from "@/@types/pages/CV";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Link from "next/link";
import Head from "next/head";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as CVComponents from "@/components/pages/cv";
import StyledButton from "@/components/atoms/forms/StyledButton";
// MUI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const [language, setLanguage] = useState<CV.Language>("en");
    const [variant, setVariant] = useState<CV.Variant>("light");

    useEffect(() => {
        disableUserScroll();
        // hideNavigationBar();

        return () => {
            enableUserScroll();
            showNavigationBar();
        };
    }, [disableUserScroll, enableUserScroll, hideNavigationBar, showNavigationBar]);

    return (
        <>
            <Head>
                <title>Kacper Książek | CV</title>
            </Head>

            <Box
                sx={{
                    maxWidth: "1200px",
                    margin: "128px auto 64px auto",
                    gap: "96px",
                    display: "flex",
                    maxHeight: "76vh",
                    ".MuiButtonBase-root": {
                        height: "42px",
                        marginLeft: "0 !important",
                    },
                    h1: {
                        fontSize: "42px",
                        fontFamily: '"Montserrat Alternates", sans-serif',
                        margin: "0 0 32px 0",
                    },
                    h3: {
                        fontSize: "20px",
                    },
                    img: {
                        objectFit: "contain",
                    },
                }}
            >
                <Stack gap={1} sx={{ flexGrow: 1 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}

                    <Stack direction="row" spacing="8px" sx={{ a: { color: "white", textDecoration: "none" } }}>
                        <Link href="/?skip-introduction-screen-rectangle-animations=true">Home</Link>
                        <span>/</span>
                        <strong>CV</strong>
                    </Stack>

                    <h1 className="alternative-font-family">Curriculum vitae</h1>

                    <Stack direction="row" justifyContent="space-between">
                        <CVComponents.PickLanguage value={language} setValue={setLanguage} />
                        <CVComponents.PickColorTheme value={variant} setValue={setVariant} />
                    </Stack>

                    <p>Due to the size of the document (over 12mb), it is not possible to download it directly from the website, but you can open a PDF preview and download it from there.</p>

                    <StyledButton componentThemeID="PRIMARY">
                        <PictureAsPdfRoundedIcon sx={{ mr: "8px" }} />
                        <span>Open PDF preview</span>
                    </StyledButton>

                    <StyledButton componentThemeID="SUCCESS">
                        <SaveAltRoundedIcon sx={{ mr: "8px" }} />
                        <span>Download A4 png (324kb)</span>
                    </StyledButton>

                    <StyledButton componentThemeID="TEXT_PRIMARY" subtleHoverEffect>
                        <QrCode2RoundedIcon sx={{ mr: "8px" }} />
                        <span>Open QR code</span>
                    </StyledButton>

                    <span style={{ flexGrow: 1 }}></span>

                    <StyledButton componentThemeID="ERROR">
                        <ChevronLeftRoundedIcon sx={{ mr: "0" }} />
                        <span>Return Home</span>
                    </StyledButton>

                    <CVComponents.SocialMediaRedirections />
                </Stack>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/assets/cv/en/dark.png" //
                    alt="cv preview"
                />
            </Box>
        </>
    );
};

export default Home;
