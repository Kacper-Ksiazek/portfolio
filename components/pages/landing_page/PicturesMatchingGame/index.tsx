// Tools
import { keyframes } from "@mui/system";
import { useState, useEffect } from "react";
import usePicturesMatchingGameContext from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
import YouWonCommunique from "./YouWonCommunique";
import ImageModel from "@/components/_utils/ImageModel";
import { PicturesMatchingGameContextProvider } from "./context";
// Styled Components
import DarkSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Dark";
import { BottomInformation, PicturesWrapper } from "./_styled_components";

// IT HAS TO BE UNIQUE ANIMATION
const fadeSimple = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
});

const PicturesMatchingGame: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();
    const [itsTheFirstGameInSession, setItsTheFirstGameInSession] = useState<boolean>(true);

    useEffect(() => {
        if (context.gameIsOver) setItsTheFirstGameInSession(false);
    }, [context.gameIsOver]);

    return (
        <DarkSectionWrapper
            shapesDirection="right"
            header={{
                main: "React image matching game",
                label: "Try to find all pairs of identical pictures as soon as possible",
            }}
            sx={{
                height: "450px",
                "&.visible": {
                    ".first-game-in-the-session": {
                        "&:nth-of-type(1)": {
                            animation: `${fadeSimple} .3s 2s both`,
                        },
                        "&:nth-of-type(2)": {
                            animation: `${fadeSimple} .3s 2.05s both`,
                        },
                        "&:nth-of-type(3)": {
                            animation: `${fadeSimple} .3s 2.1s both`,
                        },
                        "&:nth-of-type(4)": {
                            animation: `${fadeSimple} .3s 2.15s both`,
                        },
                        "&:nth-of-type(5)": {
                            animation: `${fadeSimple} .3s 2.2s both`,
                        },
                        "&:nth-of-type(6)": {
                            animation: `${fadeSimple} .3s 2.25s both`,
                        },
                        "&:nth-of-type(7)": {
                            animation: `${fadeSimple} .3s 2.3s both`,
                        },
                        "&:nth-of-type(8)": {
                            animation: `${fadeSimple} .3s 2.35s both`,
                        },
                        "&:nth-of-type(9)": {
                            animation: `${fadeSimple} .3s 2.4s both`,
                        },
                        "&:nth-of-type(10)": {
                            animation: `${fadeSimple} .3s 2.45s both`,
                        },
                    },
                },
            }}
        >
            {(() => {
                if (context.pictureToDisplayInFullsize) {
                    return (
                        <ImageModel
                            open={true} //
                            onClose={() => context.setPictureToDisplayInFullsize(null)}
                            imageURL={`/images/landing-page/images-matching-game/${context.pictureToDisplayInFullsize.folder}/fullsize.jpg`}
                        />
                    );
                }
            })()}

            <PicturesWrapper key={context.gameNumber}>
                {context.allPictures.map((item) => {
                    const displayImage = context.checkWehetherAImageShouldBeShown(item.id);
                    const isMatched = context.checkWhetherAImageHasBeenAlreadyMatched(item.folder);
                    return (
                        <SinglePicture
                            key={item.id} //
                            id={item.id}
                            image={item.folder}
                            isInvalid={displayImage && context.animationToDisplay === "invalid_choose"}
                            onClick={() => {
                                if (!isMatched) context.handlePictureOnClick(item.id);
                                else context.setPictureToDisplayInFullsize(item);
                            }}
                            displayImage={displayImage || isMatched}
                            isMatched={isMatched}
                            itsTheFirstGameInSession={itsTheFirstGameInSession}
                        />
                    );
                })}
            </PicturesWrapper>
            {context.gameIsOver && <YouWonCommunique />}

            <BottomInformation className="already-taken-turns-communique">
                Already taken turns: <strong>{context.numberOfTurns}</strong>
            </BottomInformation>
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
