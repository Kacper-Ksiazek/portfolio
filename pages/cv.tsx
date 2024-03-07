// Tools
import { useEffect, useState } from "react";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { NextPage } from "next";
import type { CV } from "@/@types/pages/CV";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as CVComponents from "@/components/pages/cv";
import StyledButton from "@/components/atoms/forms/StyledButton";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const [language, setLanguage] = useState<CV.Language>("en");

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
                    margin: "112px auto 64px auto",
                    gap: "96px",
                    display: "flex",
                    maxHeight: "80vh",
                    ".MuiButtonBase-root": {
                        height: "42px",
                        marginLeft: "0 !important",
                    },
                    h1: {
                        fontSize: "42px",
                        fontFamily: '"Montserrat Alternates", sans-serif',
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

                    <h1 className="alternative-font-family">Curriculum vitae</h1>

                    <CVComponents.PickLanguage value={language} setValue={setLanguage} />

                    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "8px" }}>
                        <button>light</button>
                        <button>dark</button>
                    </Box>

                    <h3>Save me</h3>
                    <StyledButton componentThemeID="PRIMARY">Open preview cv</StyledButton>
                    <StyledButton componentThemeID="SUCCESS">Download A4 png (324kb)</StyledButton>

                    <h3>More me</h3>
                    <StyledButton componentThemeID="TEXT_PRIMARY" subtleHoverEffect>
                        Linked in
                    </StyledButton>
                    <StyledButton componentThemeID="TEXT_PRIMARY" subtleHoverEffect>
                        Github
                    </StyledButton>

                    <span style={{ flexGrow: 1 }}></span>

                    {/* <StyledButton componentThemeID="ERROR">Return Home</StyledButton> */}
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
