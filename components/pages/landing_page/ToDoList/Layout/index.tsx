// Tools
import { forwardRef } from "react";
// Types
import type { Release } from "./@types";
import type { ReactNode } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Material UI Components
import Box from "@mui/material/Box";
// Other components
import ReleasesToggler from "./ReleaseToggler";
import * as HeaderElements from "./HeaderElements";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

export const RESET_BUTTON_WRAPPER_ID: string = "to-do-list-reset-button-wrapper";

interface ToDoListLayoutProps {
    currentRelease: Release;
    releaseIsChanging: boolean;
    children: ReactNode;

    toggleReleases: () => void;
}

const ToDoListLayout = forwardRef<HTMLDivElement, ToDoListLayoutProps>((props, ref) => {
    const { currentRelease, releaseIsChanging, toggleReleases } = props;

    return (
        <DarkSectionWrapper
            ref={ref}
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
                {props.children}
            </Box>

            <Box
                component="footer"
                sx={{
                    marginTop: "32px",
                    display: "flex",
                    width: "100%",
                    maxWidth: "1040px",
                    justifyContent: "space-between",
                }}
            >
                <div id={RESET_BUTTON_WRAPPER_ID}></div>

                <ReleasesToggler currentRelease={currentRelease} toggleReleases={toggleReleases} />
            </Box>
        </DarkSectionWrapper>
    );
});

ToDoListLayout.displayName = "ToDoListLayout";

export default ToDoListLayout;
