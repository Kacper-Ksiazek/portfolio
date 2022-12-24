// Tools
import { styled } from "@mui/system";
import { introAnimations } from "./introAnimations";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { AnimationToDisplay } from "@/@types/pages/PicturesMatchingGame";
// Material UI Icons
import SportsEsports from "@mui/icons-material/SportsEsports";
// Styled components
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

const Background = styled("span")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.2,
    "&.INVALID_CHOICE": {
        background: "#aa1b38",
    },
    "&.CORRECT_CHOICE": {
        background: "#56bc5b",
    },
    transition: "background .3s linear",
    // backgroundImage: "url('/images/landing-page/images-matching-game/rose-gdc35bc5ae_1920/thumbnail.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}));

interface PicturesMatchingGameWrapperProps {
    children: ReactNode;
    animation: AnimationToDisplay;
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
                "&.visible": {
                    ...(introAnimations as any),
                },
                maxHeight: "540px",
                transition: "max-height .15s .25s linear",
                "&.summary": {
                    maxHeight: "500px",
                },
                "&.gameplay-on": {
                    position: "fixed",
                    top: "-20px",
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    maxHeight: "100vh",
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
            childrenOutsideContent={
                <Background
                    id="user-choice-animaiton-base" //
                    className={props.animation ?? ""}
                />
            }
        >
            {props.children}
        </DarkSectionWrapper>
    );
};

export default PicturesMatchingGameWrapper;
