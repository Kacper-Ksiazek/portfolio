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
                <title>404 | Not found</title>
            </Head>

            <HTTPStatusCode
                code={404} //
                title="page not found"
                explanation="The page you are looking for does not exist."
            />
        </>
    );
};

export default Home;
