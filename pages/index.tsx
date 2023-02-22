// Tools
import { prisma } from "@/prisma/db";
import { useTheme } from "@mui/material";
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import type { NextPage, GetStaticProps } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import SEO from "@/components/pages/_SEO";
import LandingPageContent from "@/components/pages/landing_page/Wrapper";
import IntroductionScreen from "@/components/pages/landing_page/IntroductionScreen";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    const theme = useTheme();

    return (
        <>
            <SEO description="Since the age of 16 software engineering enjoyer, then freelancer, now Data Science at AGH in Cracow freshman. This portfolio is an extensive introduction of my person including information regarding my previous education and working experience, my current hobbies and foremost my motives and goals. " />
            <>
                <IntroductionScreen />
                <LandingPageContent {...props} />
            </>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<LandingPageServerSideProps> = async () => {
    await prisma.$connect();

    const projects = await prisma.project.findMany({
        select: {
            id: true,
            title: true,
            folder: true,
            end: true,
            start: true,
            shortDescription: true,
            releventTechnologies: true,
            liveDemoURL: true,
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

    await prisma.$disconnect();

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
