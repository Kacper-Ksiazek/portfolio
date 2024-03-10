// Tools
import { useEffect, useState } from "react";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { NextPage } from "next";
import type { CV, PNGResolution } from "@/@types/pages/CV";
// Other components
import Link from "next/link";
import Head from "next/head";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as CVComponents from "@/components/pages/cv";
import StyledSelect from "@/components/atoms/forms/StyledSelect";
import StyledButton from "@/components/atoms/forms/StyledButton";
import InternalRedirection from "@/components/atoms/redirections/InternalRedirection";
// MUI Icons
import HdRoundedIcon from "@mui/icons-material/HdRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

const Home: NextPage = () => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const [language, setLanguage] = useState<CV.Language>("en");
    const [variant, setVariant] = useState<CV.Variant>("light");

    const [resolutionToDownload, setResolutionToDownload] = useState<PNGResolution>("png-valid-a4");

    const [displayQRCode, setDisplayQRCode] = useState(false);

    useEffect(() => {
        disableUserScroll();
        // hideNavigationBar();

        return () => {
            enableUserScroll();
            showNavigationBar();
        };
    }, [disableUserScroll, enableUserScroll, hideNavigationBar, showNavigationBar]);

    function handleOpenPDFPreview() {
        const CVFile = getParticularCV({
            clientSide: true, //
            format: "pdf",
            lang: language,
            variant,
        });

        window.open(CVFile.path, "_blank");
    }

    function handleDownloadCVPNG() {
        const url = `/api/download_cv?format=${resolutionToDownload}&lang=${language}&variant=${variant}`;
        window.open(url, "_blank");
    }

    return (
        <>
            <Head>
                <title>Kacper Książek | CV</title>
            </Head>

            <Box
                sx={{
                    maxWidth: "1200px",
                    margin: "112px auto 64px auto",
                    gap: "36px",
                    display: "grid",
                    height: "80vh",
                    gridTemplateColumns: "1fr 1fr",
                    ".MuiButtonBase-root": {
                        height: "50px",
                        marginLeft: "0 !important",
                    },
                    h1: {
                        fontSize: "42px",
                        fontFamily: '"Montserrat Alternates", sans-serif',
                        margin: "0 0 24px 0",
                    },
                    h3: {
                        fontSize: "20px",
                    },
                    img: {
                        objectFit: "contain",
                    },
                }}
            >
                <Stack gap={1}>
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

                    <Box
                        sx={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "8px" }} //
                    >
                        <StyledButton componentThemeID="PRIMARY" onClick={handleOpenPDFPreview}>
                            <PictureAsPdfRoundedIcon sx={{ mr: "8px" }} />
                            <span>Open PDF preview</span>
                        </StyledButton>

                        <StyledButton componentThemeID="TEXT_PRIMARY" subtleHoverEffect>
                            <QrCode2RoundedIcon sx={{ mr: "8px" }} />
                            <span>Show QR code</span>
                        </StyledButton>

                        <StyledButton componentThemeID="TEXT_PRIMARY" subtleHoverEffect onClick={handleDownloadCVPNG}>
                            <SaveAltRoundedIcon sx={{ mr: "8px" }} />
                            <span>Download png </span>
                            <CVComponents.CVPictureSize
                                lang={language} //
                                resolution={resolutionToDownload}
                                variant={variant}
                            />
                        </StyledButton>

                        <StyledSelect
                            value={resolutionToDownload} //
                            onChange={(e) => setResolutionToDownload(e.target.value as PNGResolution)}
                            componentThemeID="TEXT_PRIMARY"
                            startAdornment={<HdRoundedIcon />}
                            options={[
                                { value: "png-valid-a4", alias: "A4 Format" },
                                { value: "png-high-res", alias: "Higher Resolution" },
                            ]}
                        />
                    </Box>

                    <span style={{ flexGrow: 1 }}></span>

                    <div>
                        <InternalRedirection
                            reverseArrow //
                            componentThemeID="ERROR"
                            url="/?skip-introduction-screen-rectangle-animations=true"
                            sx={{ width: "100%", marginLeft: "0 !important" }}
                        >
                            <span>Return Home</span>
                        </InternalRedirection>
                    </div>

                    <CVComponents.SocialMediaRedirections />
                </Stack>

                <CVComponents.CVPreview
                    displayQRCode={displayQRCode}
                    language={language}
                    variant={variant}
                    //
                    openPDFPreview={handleOpenPDFPreview}
                />
            </Box>
        </>
    );
};

export default Home;
