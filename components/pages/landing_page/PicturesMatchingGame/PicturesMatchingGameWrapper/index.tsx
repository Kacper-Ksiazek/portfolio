// Tools
import { introAnimations } from "./introAnimations";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import SportsEsports from "@mui/icons-material/SportsEsports";
// Styled components
import Background from "./Background";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

interface PicturesMatchingGameWrapperProps {
    children: ReactNode;
    className: string;
    preventHeaderFromRendering: boolean;
}

const PicturesMatchingGameWrapper: FunctionComponent<PicturesMatchingGameWrapperProps> = (props) => {
    return (
        <DarkSectionWrapper
            id="picture-matching-game-main-wrapper"
            shapesDirection="right"
            header={{
                main: "React image matching game",
                index: 2,
                icon: <SportsEsports />,
                description: `Another very frequently seen portfolio project is a images matching game, so I had decided to code my version of it either in order to spice up everything and more importantly to create second content separator.`,
            }}
            renderHeader={!props.preventHeaderFromRendering}
            sx={{
                "button.navigation": {
                    fontSize: "20px",
                    padding: "6px 48px",
                    "&:disabled": {
                        background: "#fff",
                        opacity: 0.5,
                    },
                },
                "&.visible": {
                    ...(introAnimations as any),
                },
                "&.summary": {
                    height: "calc(100vh - 40px)",
                },
                "&.gameplay-on": {
                    position: "fixed",
                    top: "-20px",
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    borderRadius: "0",
                    overflowY: "scroll",
                    zIndex: 10000,
                    transition: "max-height .15s linear",
                    ".dark-section-wrapper-background-svg, #user-choice-animaiton-base": {
                        position: "fixed",
                        width: "calc(100vw - 8px)",
                        height: "100vh",
                        top: 0,
                        left: 0,
                    },
                    ".dark-content-wrapper-github-redirection": {
                        display: "none",
                    },
                    "&::-webkit-scrollbar": {
                        width: "8px",
                        background: "#f0eff4",
                    },

                    "&::-webkit-scrollbar-track": {
                        boxShadow: "inset 0 0 2px #888",
                        opacity: 0.1,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#da4167",
                        borderRadius: "2px",
                    },
                },
            }}
            className={props.className}
            githubURL="https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page/PicturesMatchingGame"
            childrenOutsideContent={<Background />}
        >
            {props.children}
        </DarkSectionWrapper>
    );
};

export default PicturesMatchingGameWrapper;
