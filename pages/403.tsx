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
                <title>403 | Forbidden</title>
            </Head>

            <HTTPStatusCode
                code={403} //
                title="forbidden"
                explanation="The request was valid, but the server is refusing action."
            />
        </>
    );
};

export default Home;
