// Tools
// Types
import type { FunctionComponent } from "react";

interface ImagePreviewModalProps {
    modalIsOpened: boolean;

    closeMoal: () => void;
}

const ImagePreviewModal: FunctionComponent<ImagePreviewModalProps> = (props) => {
    return (
        <>
            <span></span>
        </>
    );
};

export default ImagePreviewModal;
