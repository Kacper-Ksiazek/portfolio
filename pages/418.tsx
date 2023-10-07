// Types
import type { NextPage } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";
// Styled components
import HTTPStatusCode from "@/components/pages/http_status_code";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>{"418 | I'm a teapot"}</title>
            </Head>

            <HTTPStatusCode
                code={418} //
                title="I'm a teapot"
                explanation="The server refuses the attempt to brew coffee with a teapot."
            />
        </>
    );
};

export default Home;
