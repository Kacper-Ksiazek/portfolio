// Tools
import { styled } from "@mui/material";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/image";
import Head from "next/head";
import SEO from "@/components/pages/_SEO";
// Styled components
const AppLoaderWrapper = styled("div")(({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    ...theme.mixins.flex_center,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",

    "&.outro": {
        animation: `${fadeSimpleOUT} .3s .3s ease-in-out both`,
    },

    "div.img-wrapper": {
        width: "240px",
        position: "relative",
        aspectRatio: "400/259",
        opacity: 1,
    },
}));

const AppLoadingScreen: FunctionComponent<{ outro: boolean }> = (props) => {
    return (
        <>
            <SEO description="Fullstack developer portfolio website. I specialize in the typescript. Second year student of Engineering and Data Analysis at AGH UST in Cracow, Poland." />

            <AppLoaderWrapper className={props.outro ? "outro" : ""}>
                <div className="img-wrapper">
                    <Image
                        src={`/main-page-logo/app-loader.png`} //
                        alt="page-logo"
                        layout="fill"
                        priority
                    />
                </div>
            </AppLoaderWrapper>
        </>
    );
};

export default AppLoadingScreen;
