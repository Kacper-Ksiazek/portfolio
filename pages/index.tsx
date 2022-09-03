// Tools
import { useEffect } from "react";
import { prisma } from "@/prisma/db";
import { useRouter } from "next/router";
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
    const router = useRouter();

    useEffect(() => {
        if (router.query.scrollToElement) {
            const el = document.getElementById(router.query.scrollToElement as string);
            if (el) {
                window.scrollTo({
                    top: el.getBoundingClientRect().top + window.pageYOffset - 80, //
                });
                setTimeout(() => {
                    window.scrollTo({
                        top: window.scrollY - 1,
                    });
                }, 500);
            }
        }
    }, [router.query]);

    return (
        <>
            <Head>
                <title>Kacper Książek</title>
            </Head>
            {/* <IntroductionScreen /> */}
            {/* <BreakTheIce
                hobbies={props.hobbies} //
                schools={props.schools}
                previousJobs={props.previousJobs}
            /> */}
            {/* <ToDoList /> */}
            {/* <Projects projects={props.projects} /> */}
            {/* <PicturesMatchingGame /> */}
            <Contact />
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

    const hobbies = await prisma.hobby.findMany();
    const schools = await prisma.school.findMany();
    const previousJobs = await prisma.previousJob.findMany();

    const yearsToIndicate: Record<string, number> = {
        PORTFOLIO: 2022,
        ELECTRON_WORDS_LEARNING_APP: 2021,
        GAMES_APP: 2020,
    };

    return {
        props: {
            projects: projects.map((el) => {
                if (yearsToIndicate.hasOwnProperty(el.id)) {
                    (el as any).yearToIndicate = yearsToIndicate[el.id];
                }

                (el as any).end = formatProjectDate(el.end);
                (el as any).start = formatProjectDate(el.start);
                return el;
            }) as any,
            previousJobs: previousJobs.map((el) => {
                (el as any).end = formatProjectDate(el.end);
                (el as any).start = formatProjectDate(el.start);
                return el;
            }) as any,
            hobbies,
            schools,
        },
    };
};
