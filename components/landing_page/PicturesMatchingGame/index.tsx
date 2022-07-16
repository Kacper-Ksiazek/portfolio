// Tools
import usePicturesMatchingGameContext from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
import { PicturesMatchingGameContextProvider } from "./context";
// Styled Components
import DarkSectionWrapper from "@/components/_styled_components/SectionWrapper/Dark";
import { BottomInformation, PicturesWrapper } from "./_styled_components";

const PicturesMatchingGame: FunctionComponent = (props) => {
    const { allPictures, numberOfTurns, checkWehetherAImageShouldBeShown, handlePictureOnClick, animationToDisplay, checkWhetherAImageHasBeenAlreadyMatched } = usePicturesMatchingGameContext();

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
            <PicturesWrapper>
                {allPictures.map((item) => {
                    const displayImage = checkWehetherAImageShouldBeShown(item.id);
                    const isMatched = checkWhetherAImageHasBeenAlreadyMatched(item.folder);
                    return (
                        <SinglePicture
                            key={item.id} //
                            id={item.id}
                            image={item.folder}
                            isInvalid={displayImage && animationToDisplay === "invalid_choose"}
                            onClick={() => {
                                if (!isMatched) handlePictureOnClick(item.id);
                            }}
                            displayImage={displayImage || isMatched}
                            isMatched={isMatched}
                        />
                    );
                })}
            </PicturesWrapper>

            <BottomInformation>
                Already taken turns: <strong>{numberOfTurns}</strong>
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
