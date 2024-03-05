// Types
import type { NextPage } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Head from "next/head";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>CV</title>
            </Head>

            <h1>my cv will be here</h1>
        </>
    );
};

export default Home;
