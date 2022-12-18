// Tools
import { styled } from "@mui/system";
import { introAnimations } from "./introAnimations";
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import PickADifficulty from "./PickADifficulty";
import ImageModel from "@/components/utils/ImageModel";
import { PicturesMatchingGameContextProvider } from "./context";
// Material UI Icons
import SportsEsports from "@mui/icons-material/SportsEsports";
// Styled Components
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";
import Gameplay from "./Gameplay";
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
}));

const PicturesMatchingGame: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

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
            sx={{
                "&.visible": {
                    ...(introAnimations as any),
                },
                "&.gameplay-on": {
                    position: "fixed",
                    top: "-20px",
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    borderRadius: "0",
                    overflowY: "scroll",
                    "&::before, #user-choice-animaiton-base": {
                        position: "fixed",
                        width: "calc(100vw - 8px)",
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
            githubURL="https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page/PicturesMatchingGame"
            childrenOutsideContent={
                <Background
                    id="user-choice-animaiton-base" //
                    className={context.gameplay.animation ?? ""}
                />
            }
        >
            {(() => {
                if (context.pictureToDisplayInFullsize) {
                    return (
                        <ImageModel
                            open={true} //
                            title={context.pictureToDisplayInFullsize.title}
                            onClose={() => context.setPictureToDisplayInFullsize(null)}
                            imageURL={`/images/landing-page/images-matching-game/${context.pictureToDisplayInFullsize.url}/fullsize.jpg`}
                        />
                    );
                }
            })()}

            {(() => {
                switch (context.stage) {
                    case "SELECT_DIFFICULTY":
                        return <PickADifficulty />;
                    case "GAMEPLAY":
                        return <Gameplay />;
                }

                return <></>;
            })()}

            {/* 
            {context.gameIsOver && <YouWonCommunique />}

            <BottomInformation className="already-taken-turns-communique">
                Already taken turns: <strong>{context.numberOfTurns}</strong>
            </BottomInformation> */}
        </DarkSectionWrapper>
    );
};

const PicturesMatchingGameContextProviderWrapper: FunctionComponent = () => {
    return (
        <PicturesMatchingGameContextProvider>
            <PicturesMatchingGame />
        </PicturesMatchingGameContextProvider>
    );
};

export default PicturesMatchingGameContextProviderWrapper;
