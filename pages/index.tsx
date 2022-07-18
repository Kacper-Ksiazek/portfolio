// Tools
// Types
import type { NextPage } from "next";
// Material UI Components
// Other components
import Head from "next/head";
import Contact from "@/components/landing_page/Contact";
import ToDoList from "@/components/landing_page/ToDoList";
import BreakTheIce from "@/components/landing_page/BreakTheIce";
import IntroductionScreen from "@/components/landing_page/IntroductionScreen";
// import PicturesMatchingGame from "@/components/landing_page/PicturesMatchingGame";
// Material UI Icons

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Książek</title>
            </Head>
            <IntroductionScreen />
            {/* <BreakTheIce /> */}
            {/* <ToDoList /> */}
            {/* <PicturesMatchingGame /> */}
            {/* <Contact /> */}
        </>
    );
};

export default Home;
