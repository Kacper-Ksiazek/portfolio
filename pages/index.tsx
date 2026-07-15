// Tools
import { formatPreviousJob, formatProject } from "@/utils/serverless/landing_page";
import { getHobbies, getLandingProjects, getPreviousJobs, getSchools } from "@/lib/content";
// Types
import type { NextPage, GetStaticProps } from "next";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import SEO from "@/components/pages/_SEO";
import LandingPageContent from "@/components/pages/landing_page/Wrapper";
import IntroductionScreen from "@/components/pages/landing_page/IntroductionScreen";

const REVALIDATE_SECONDS = 86400;

const Home: NextPage<LandingPageServerSideProps> = (props) => {
    return (
        <>
            <SEO description="Fullstack developer portfolio website. I specialize in the typescript. Second year student of Engineering and Data Analysis at AGH UST in Cracow, Poland." />
            <>
                <IntroductionScreen />
                <LandingPageContent {...props} />
            </>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<LandingPageServerSideProps> = async () => {
    return {
        props: {
            projects: getLandingProjects().map(formatProject),
            previousJobs: getPreviousJobs().map(formatPreviousJob),
            hobbies: getHobbies(),
            schools: getSchools(),
        },
        revalidate: REVALIDATE_SECONDS,
    };
};
