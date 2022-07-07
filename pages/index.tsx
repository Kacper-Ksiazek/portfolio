// Tools
// Types
import type { NextPage } from "next";
// Material UI Components
// Other components
import BreakTheIce from "@/components/landing_page/BreakTheIce";
import Head from "next/head";
// Material UI Icons
// Styled components
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Książek</title>
            </Head>
            <BreakTheIce />
        </>
    );
};

export default Home;
