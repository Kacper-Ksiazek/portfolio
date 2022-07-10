// Tools
// Types
import type { NextPage } from "next";
// Material UI Components
// Other components
import Head from "next/head";
import Contact from "@/components/landing_page/Contact";
import ToDoList from "@/components/landing_page/ToDoList";
import BreakTheIce from "@/components/landing_page/BreakTheIce";
// Material UI Icons

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Książek</title>
            </Head>
            {/* <BreakTheIce /> */}
            {/* <ToDoList /> */}
            <Contact />
        </>
    );
};

export default Home;
