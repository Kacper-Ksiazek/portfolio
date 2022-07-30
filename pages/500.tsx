// Types
import type { NextPage } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";
import Link from "next/Link";
// Styled components
import StyledButton from "@/components/_styled_components/forms/StyledButton";
import { HTTPStatusCodeContentWrapper, StatusCode, ButtonsWrapper } from "@/components/pages/http_status_code";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>500 | Unexpected error</title>
            </Head>

            <HTTPStatusCodeContentWrapper reversedSkew>
                <StatusCode>500</StatusCode>
                <h3>Ops!</h3>
                <p>Some unexpected has error occurred, I will do my best to fix it as soon as possible. Excuse me for all the inconveniences and please try again later</p>
                <h4>Check available resources</h4>

                <ButtonsWrapper>
                    <Link href="/" passHref>
                        <StyledButton color="primary">Main page</StyledButton>
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
