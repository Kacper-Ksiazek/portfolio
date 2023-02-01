// Types
import type { FunctionComponent } from "react";
import type { LandingPageServerSideProps } from "@/@types/pages/LandingPage";
// Other components
import Contact from "@/components/pages/landing_page/Contact";
import Projects from "@/components/pages/landing_page/Projects";
import ToDoList from "@/components/pages/landing_page/ToDoList";
import BreakTheIce from "@/components/pages/landing_page/BreakTheIce";
import PicturesMatchingGame from "@/components/pages/landing_page/PicturesMatchingGame";
import ScrollToParticularSection from "@/components/pages/landing_page/ScrollToParticularSection";

const LandingPageWrapper: FunctionComponent<LandingPageServerSideProps> = (props) => {
    return (
        <>
            {/* <ScrollToParticularSection />
            <BreakTheIce
                hobbies={props.hobbies} //
                schools={props.schools}
                previousJobs={props.previousJobs}
            />
            <ToDoList />
            <Projects projects={props.projects} />
            <PicturesMatchingGame /> */}
            <Contact />
        </>
    );
};

export default LandingPageWrapper;
