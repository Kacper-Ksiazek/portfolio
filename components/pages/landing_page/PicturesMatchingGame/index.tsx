// Tools
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import ALL_AVAILABLE_IMAGES from "@/data/pictures_for_matching_game";
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import GameStage from "./GameStage";
import ImageModelWithGallery from "./ImageModelWithGallery";
import { PicturesMatchingGameContextProvider } from "./context";
import RenderWhenVisible from "@/components/utils/RenderWhenVisible";
// Styled Components
import MainWrapper from "./MainWrapper";

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
        <MainWrapper
            className={[
                !context.gameplay.isExiting && context.navigation.stage === "GAMEPLAY" ? "gameplay-on" : "", //
                context.navigation.stage === "SUMMARY" ? "summary" : "",
            ].join(" ")}
            preventHeaderFromRendering={context.navigation.stage === "SUMMARY"}
        >
            <ImageModelWithGallery />

            {/*  */}
            <RenderWhenVisible
                sx={{
                    minHeight: "190px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    "@media (max-width:750px)": {
                        height: "270px",
                    },
                }}
            >
                <GameStage />
            </RenderWhenVisible>
            {/*  */}
        </MainWrapper>
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
