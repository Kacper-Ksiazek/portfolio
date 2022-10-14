// Tools
import { useState, useEffect } from "react";
import { introAnimations } from "./introAnimations";
import usePicturesMatchingGameContext from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
import YouWonCommunique from "./YouWonCommunique";
import ImageModel from "@/components/utils/ImageModel";
import { PicturesMatchingGameContextProvider } from "./context";
// Material UI Icons
import SportsEsports from "@mui/icons-material/SportsEsports";
// Styled Components
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";
import { BottomInformation, PicturesWrapper } from "./_styled_components";

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
                index: 2,
                icon: <SportsEsports />,
                description: `Another very frequently seen portfolio project is a images matching game, so I had decided to code my version of it either in order to spice up everything and more importantly to create second content separator.`,
            }}
            sx={{
                "&.visible": {
                    ...(introAnimations as any),
                },
            }}
            githubURL="https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page/PicturesMatchingGame"
        >
            {(() => {
                if (context.pictureToDisplayInFullsize) {
                    return (
                        <ImageModel
                            open={true} //
                            title={context.pictureToDisplayInFullsize.title}
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
