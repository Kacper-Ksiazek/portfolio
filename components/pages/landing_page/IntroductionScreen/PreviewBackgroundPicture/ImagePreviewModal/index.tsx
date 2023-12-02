// Tools
import { useBackgroundDataToPreview } from "./useBackgroundDataToPreview";
// Types
import type { FunctionComponent } from "react";
// Other components
import ImageModal from "@/components/utils/ImageModel";

interface ImagePreviewModalProps {
    closeModal: () => void;
}

const ImagePreviewModal: FunctionComponent<ImagePreviewModalProps> = (props) => {
    const imageProps = useBackgroundDataToPreview();

    return (
        <ImageModal
            open={true} //
            onClose={props.closeModal}
            imageURL={imageProps.url}
            title={imageProps.title}
        />
    );
};

export default ImagePreviewModal;
