// Tools
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useReleases } from "./hooks/useReleases";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Material UI Components
import Box from "@mui/material/Box";
// Other components
import * as HeaderElements from "./HeaderElements";
import Release2023 from "./2023";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

const Legacy = dynamic(() => import("./Legacy"));

const ToDoList: FunctionComponent = () => {
    const mainWrapperRef = useRef<HTMLDivElement | null>(null);

    const { currentRelease, releaseIsChanging, toggleReleases } = useReleases(mainWrapperRef);

    return (
        <DarkSectionWrapper
            ref={mainWrapperRef}
            shapesDirection="left"
            header={{
                main: <HeaderElements.Title currentRelease={currentRelease} isChanging={releaseIsChanging} />,
                index: 1,
                icon: <Code />,
                description: <HeaderElements.Description currentRelease={currentRelease} isChanging={releaseIsChanging} />,
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
