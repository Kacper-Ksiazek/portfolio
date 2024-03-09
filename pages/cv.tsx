// Tools
import { useEffect, useState } from "react";
import { getParticularCVPath } from "@/utils/paths";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
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
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

const Home: NextPage = () => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const [language, setLanguage] = useState<CV.Language>("en");
    const [variant, setVariant] = useState<CV.Variant>("light");

    const [resolutionToDownload, setResolutionToDownload] = useState<PNGResolution>("png-valid-a4");

    useEffect(() => {
        disableUserScroll();
        // hideNavigationBar();

        return () => {
            enableUserScroll();
            showNavigationBar();
        };
    }, [disableUserScroll, enableUserScroll, hideNavigationBar, showNavigationBar]);

    function handleOpenPDFPreview() {
        console.log("Opening PDF preview");
        window.open(
            getParticularCVPath({
                format: "pdf", //
                lang: language,
                variant,
                clientSide: true,
            }),
            "_blank"
        );
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
                    gap: "96px",
                    display: "flex",
                    maxHeight: "80vh",
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

                    <Box
                        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }} //
                    >
                        <StyledButton componentThemeID="PRIMARY" onClick={handleOpenPDFPreview}>
                            <PictureAsPdfRoundedIcon sx={{ mr: "8px" }} />
                            <span>Open PDF preview</span>
                        </StyledButton>

                        <StyledButton componentThemeID="TEXT_PRIMARY" subtleHoverEffect>
                            <QrCode2RoundedIcon sx={{ mr: "8px" }} />
                            <span>Show QR code</span>
                        </StyledButton>

                        <StyledButton componentThemeID="SUCCESS">
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

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    onClick={handleOpenPDFPreview} //
                    src={getParticularCVPath({ clientSide: true, format: "png-high-res", lang: language, variant })} //
                    alt="cv preview"
                    style={{ width: "550px", cursor: "pointer" }}
                />
            </Box>
        </>
    );
};

export default Home;
