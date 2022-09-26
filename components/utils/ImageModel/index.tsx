// Tools
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import useFullscreen from "./hooks/useFullscreen";
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
    const [open, setOpen] = useState<boolean>(props.open);
    const [displayOutroAnimation, setDisplayOutroAnimation] = useState<boolean>(false);
    const [displayLoading, setDisplayLoading] = useState<boolean>(true);

    useEffect(() => {
        setDisplayOutroAnimation(false);
        setOpen(props.open);
    }, [props.open]);

    const closeModal = () => {
        setDisplayOutroAnimation(true);
        setTimeout(() => {
            setOpen(false);
            setTimeout(() => {
                if (isFullscreenOpened) {
                    handleFullsizeToggle();
                    setTimeout(() => {
                        props.onClose();
                    }, 30);
                } else {
                    props.onClose();
                }
            }, 150);
        }, 120);
    };

    return (
        <Modal
            open={open}
            onClose={closeModal}
            sx={{
                ".MuiBackdrop-root": {
                    backdropFilter: "blur(3px)",
                },
            }}
        >
            <Fade in={open}>
                <ImageModelBase>
                    <TopSideButtons
                        fullscreenIsOpen={isFullscreenOpened} //
                        handleFullsizeToggle={handleFullsizeToggle}
                        handleCloseModal={closeModal}
                    />
                    {displayLoading && <Loading />}
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

                    <div className={["imageWrapper", displayOutroAnimation ? "outro" : displayLoading ? "" : "intro"].join(" ")}>
                        {props.gallery && <GalleryManagement {...props.gallery} />}
                        <Image
                            src={props.imageURL} //
                            layout="fill"
                            alt="image-in-fullsize"
                            objectFit="contain"
                            onClick={closeModal}
                            onLoad={() => setDisplayLoading(false)}
                        ></Image>
                    </div>
                </ImageModelBase>
            </Fade>
        </Modal>
    );
};

export default ImageModal;
