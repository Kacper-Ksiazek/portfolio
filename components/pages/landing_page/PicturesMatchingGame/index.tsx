// Tools
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

const PicturesMatchingGame: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <DarkSectionWrapper
            shapesDirection="right"
            header={{
                main: "React image matching game",
                label: "Try to find all pairs of identical pictures as soon as possible",
            }}
            sx={{
                height: "450px",
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
                        />
                    );
                })}
            </PicturesWrapper>
            {context.gameIsOver && <YouWonCommunique />}

            <BottomInformation>
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
