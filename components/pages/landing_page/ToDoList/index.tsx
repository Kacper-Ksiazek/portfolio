// Tools
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useDelayedState } from "@/hooks/useDelayedState";
// Types
import type { FunctionComponent, MutableRefObject } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Material UI Components
import Box from "@mui/material/Box";
// Other components
import Release2023 from "./2023";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

const Legacy = dynamic(() => import("./Legacy"));

/**
 * Scrolls the view to the top of the component.
 */
function alignViewToTop({ current }: MutableRefObject<HTMLDivElement | null>) {
    if (current === null) return;
    current.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

const ToDoList: FunctionComponent = () => {
    const mainWrapperRef = useRef<HTMLDivElement | null>(null);

    const releaseToDisplay = useDelayedState<"legacy" | "2023">("2023", 300);

    function toggleReleases() {
        releaseToDisplay.setValue(releaseToDisplay.value === "2023" ? "legacy" : "2023");
        alignViewToTop(mainWrapperRef);
    }

    return (
        <DarkSectionWrapper
            ref={mainWrapperRef}
            shapesDirection="left"
            header={{
                main: "React to do list",
                index: 1,
                icon: <Code />,
                description: `To do list project is undoubtedly a *part and parcel* of everyone's frontend developer portfolio, because this at the first glance unassuming piece of software is actually a *very accurate and reliable gauge of somebody's competencies*.`,
            }}
            githubURL={"https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page"}
        >
            <Box
                sx={{
                    opacity: releaseToDisplay.isChanging ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                }}
            >
                {releaseToDisplay.value === "2023" ? <Release2023 /> : <Legacy />}
            </Box>

            <button onClick={toggleReleases}>mvp</button>
        </DarkSectionWrapper>
    );
};

export default ToDoList;
