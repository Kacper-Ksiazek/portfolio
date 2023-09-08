// Tools
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useReleases } from "./hooks/useReleases";
// Types
import type { Release } from "./@types";
import type { FunctionComponent, MutableRefObject } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Material UI Components
import Box from "@mui/material/Box";
// Other components
import Release2023 from "./2023";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

const Legacy = dynamic(() => import("./Legacy"));

const DESCRIPTIONS: Record<Release, string> = {
    legacy: `To do list project is undoubtedly a *part and parcel* of everyone's frontend developer portfolio, because this at the first glance unassuming piece of software is actually a *very accurate and reliable gauge of somebody's competencies*.`,
    //
    "2023": `I rebuilt it from scratch, as a hobby, *alongside my first year at university*. It's a *customizable* and complex app, but not overly intricate. I poured *a lot of effort* into this seemingly simple app, introducing *many interesting features*.`,
};

const ToDoList: FunctionComponent = () => {
    const mainWrapperRef = useRef<HTMLDivElement | null>(null);

    const { currentRelease, releaseIsChanging, toggleReleases } = useReleases(mainWrapperRef);

    return (
        <DarkSectionWrapper
            ref={mainWrapperRef}
            shapesDirection="left"
            header={{
                main: "React to do list- 2023",
                index: 1,
                icon: <Code />,
                description: DESCRIPTIONS[currentRelease],
            }}
            githubURL={"https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page"}
        >
            <Box
                sx={{
                    opacity: releaseIsChanging ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                }}
            >
                {currentRelease === "2023" ? <Release2023 /> : <Legacy />}
            </Box>

            <button onClick={toggleReleases}>mvp</button>
        </DarkSectionWrapper>
    );
};

export default ToDoList;
