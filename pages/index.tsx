// Tools
import { prisma } from "@/prisma/db";
import { formatPreviousJob, formatProject } from "@/utils/serverless/landing_page";
// Types
import type { NextPage, GetStaticProps } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import SEO from "@/components/pages/_SEO";
import LandingPageContent from "@/components/pages/landing_page/Wrapper";
import IntroductionScreen from "@/components/pages/landing_page/IntroductionScreen";

const Home: NextPage<LandingPageServerSideProps> = (props) => {
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
            type: true,
            end: true,
            start: true,
            shortDescription: true,
            releventTechnologies: true,
            liveDemoURL: true,
            hasSubpage: true,
        },
        orderBy: {
            end: "desc",
        },
    });

    const hobbies = await prisma.hobby.findMany();
    const schools = await prisma.school.findMany();
    const previousJobs = await prisma.previousJob.findMany();

    await prisma.$disconnect();

    return {
        props: {
            projects: projects.map(formatProject),
            previousJobs: previousJobs.map(formatPreviousJob),
            hobbies,
            schools,
        },
    };
};
