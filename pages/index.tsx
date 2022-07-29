// Tools
import { prisma } from "@/prisma/db";
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import type { NextPage, GetServerSideProps } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Material UI Components
// Other components
import Head from "next/head";
import Contact from "@/components/pages/landing_page/Contact";
import Projects from "@/components/pages/landing_page/Projects";
import ToDoList from "@/components/pages/landing_page/ToDoList";
import BreakTheIce from "@/components/pages/landing_page/BreakTheIce";
import IntroductionScreen from "@/components/pages/landing_page/IntroductionScreen";
import PicturesMatchingGame from "@/components/pages/landing_page/PicturesMatchingGame";
// Material UI Icons

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <Head>
                <title>Kacper Książek</title>
            </Head>
            {/* <IntroductionScreen /> */}
            <Projects projects={props.projects} />
            {/* <BreakTheIce /> */}
            {/* <ToDoList /> */}
            {/* <PicturesMatchingGame /> */}
            {/* <Contact /> */}
        </>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps<LandingPageServerSideProps> = async () => {
    const projects = await prisma.project.findMany({
        select: {
            id: true,
            title: true,
            folder: true,
            end: true,
            start: true,
            shortDescription: true,
            releventTechnologies: true,
        },
        orderBy: {
            end: "desc",
        },
    });

    return {
        props: {
            projects: projects.map((el) => {
                (el as any).end = formatProjectDate(el.end);
                (el as any).start = formatProjectDate(el.start);
                return el;
            }) as any,
        },
    };
};
