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
                <title>409 | Conflict</title>
            </Head>

            <HTTPStatusCode
                code={409} //
                title="conflict"
                explanation="Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates. "
            />
        </>
    );
};

export default Home;
