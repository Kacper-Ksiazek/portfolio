// Tools
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import ALL_AVAILABLE_IMAGES from "@/data/pictures_for_matching_game";
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Summary from "./Summary";
import PickADifficulty from "./PickADifficulty";
import ImageModel from "@/components/utils/ImageModel";
import { PicturesMatchingGameContextProvider } from "./context";
// Styled Components
import Gameplay from "./Gameplay";
import PicturesMatchingGameWrapper from "./PicturesMatchingGameWrapper";

const PicturesMatchingGame: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    useLazyLoadedImages({
        id: "PICTURES_MATCHING_MINIGAME_THUMBNAILS",
        srcsToLazyLoad: ALL_AVAILABLE_IMAGES.map((image) => `/images/landing-page/images-matching-game/${image.url}/thumbnail.jpg`),
    });

    useLazyLoadedImages({
        id: "PICTURES_MATCHING_MINIGAME_CURRENT_PICTURES_IN_FULLSIZE",
        srcsToLazyLoad: context.gameplay.pictures.map((image) => `/images/landing-page/images-matching-game/${image.url}/fullsize.jpg`),
    });

    return (
        <PicturesMatchingGameWrapper animation={context.gameplay.animation}>
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
                switch (context.navigation.stage) {
                    case "SELECT_DIFFICULTY":
                        return <PickADifficulty />;
                    case "GAMEPLAY":
                        return <Gameplay />;
                    case "SUMMARY":
                        return <Summary />;
                        return <></>;
                }
            })()}
        </PicturesMatchingGameWrapper>
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
