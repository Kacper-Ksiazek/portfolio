// Tools
import dynamic from "next/dynamic";
import { useFullscreen, useModalControls } from "./hooks";
// Types
import type { GalleryProps } from "./@types";
import type { FunctionComponent } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
// Other Components
import Image from "next/image";
import TopSideButtons from "./TopSideButtons";
const GalleryManagement = dynamic(() => import("./GalleryManagement"));
// Styled components
const Title = dynamic(() => import("./_styled_components/Title"));
import Loading from "./_styled_components/Loading";
import ImageModelBase from "./_styled_components/ImageModelBase";

interface ImageModalProps {
    open: boolean;
    onClose: () => void;
    imageURL: string;

    title?: string;
    gallery?: GalleryProps;
}

const ImageModal: FunctionComponent<ImageModalProps> = (props) => {
    const { isFullscreenOpened, handleFullsizeToggle } = useFullscreen();

    const { state, closeModal, onImageLoad } = useModalControls({
        isFullscreenOpened,
        modalIsOpened: props.open,
        handleFullsizeToggle,
        onClose: props.onClose,
    });

    return (
        <Modal
            open={state.displayModal}
            onClose={closeModal}
            sx={{
                ".MuiBackdrop-root": {
                    backdropFilter: "blur(3px)",
                },
            }}
            id="image-modal-wrapper"
        >
            <Fade in={state.displayModal}>
                <ImageModelBase>
                    <TopSideButtons
                        fullscreenIsOpen={isFullscreenOpened} //
                        handleFullsizeToggle={handleFullsizeToggle}
                        handleCloseModal={closeModal}
                    />
                    {/* Display loading animation */}
                    {state.displayImageLoader && <Loading />}

                    {props.title && (
                        <Title>
                            {(() => {
                                if (props.gallery) {
                                    const { currentIndex, imagesInTotal } = props.gallery;

                                    return (
                                        <span className="gallery-navigation-info">
                                            {currentIndex + 1} of {imagesInTotal}
                                        </span>
                                    );
                                }
                            })()}
                            <span className="label" key={props.title}>
                                {props.title}
                            </span>
                        </Title>
                    )}

                    <div className={["imageWrapper", state.displayOutroAnimation ? "outro" : state.displayImageLoader ? "" : "intro"].join(" ")}>
                        {props.gallery && <GalleryManagement {...props.gallery} />}
                        <Image
                            src={props.imageURL} //
                            layout="fill"
                            alt="image-in-fullsize"
                            objectFit="contain"
                            onClick={closeModal}
                            onLoad={onImageLoad}
                        ></Image>
                    </div>
                </ImageModelBase>
            </Fade>
        </Modal>
    );
};

export default ImageModal;
