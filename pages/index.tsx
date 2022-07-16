// Tools
// Types
import type { NextPage } from "next";
// Material UI Components
// Other components
import Head from "next/head";
import Contact from "@/components/landing_page/Contact";
import ToDoList from "@/components/landing_page/ToDoList";
import BreakTheIce from "@/components/landing_page/BreakTheIce";
import IamgesGuessingGame from "@/components/landing_page/ImagesGuessingGame";
// Material UI Icons

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Książek</title>
            </Head>
            {/* <BreakTheIce /> */}
            {/* <ToDoList /> */}
            <IamgesGuessingGame />
            {/* <Contact /> */}
        </>
    );
};

export default Home;
