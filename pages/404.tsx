// Types
import type { NextPage } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";
import Link from "next/link";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import { HTTPStatusCodeContentWrapper, StatusCode, ButtonsWrapper } from "@/components/pages/http_status_code";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>404 | Not found</title>
            </Head>

            <HTTPStatusCodeContentWrapper>
                <StatusCode>404</StatusCode>
                <h3>Ops!</h3>
                <p>The page you are looking for apparently does not exists</p>
                <h4>Check available resources</h4>

                <ButtonsWrapper>
                    <Link href="/" passHref>
                        <StyledButton componentThemeID="PRIMARY">Main page</StyledButton>
                    </Link>

                    <Link href="/projects/ABU_DHABI" passHref>
                        <StyledButton>Latest project</StyledButton>
                    </Link>
                </ButtonsWrapper>
            </HTTPStatusCodeContentWrapper>
        </>
    );
};

export default Home;
