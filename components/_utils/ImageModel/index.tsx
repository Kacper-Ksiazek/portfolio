// Tools
import { useState, useEffect } from "react";
import useFullscreen from "./hooks/useFullscreen";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
// Other Components
import Image from "next/Image";
import TopSideButtons from "./TopSideButtons";
// Styled components
import Loading from "./_styled_components/Loading";
import ImageModelBase from "./_styled_components/ImageModelBase";

interface ImageModalProps {
    open: boolean;
    onClose: () => void;
    imageURL: string;
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
                    <div className={["imageWrapper", displayOutroAnimation ? "outro" : displayLoading ? "" : "intro"].join(" ")}>
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
