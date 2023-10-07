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
                <title>401 | Unauthorized</title>
            </Head>

            <HTTPStatusCode
                code={401} //
                title="unauthorized"
                explanation="The request has not been applied because it lacks valid authentication credentials for the target resource."
            />
        </>
    );
};

export default Home;
