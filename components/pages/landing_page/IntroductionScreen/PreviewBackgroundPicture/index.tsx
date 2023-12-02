// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
import { useModalControls } from "./hooks/useModalControls";
// Types
import type { FunctionComponent } from "react";
// Other components
import ImagePreviewModal from "./ImagePreviewModal";
import ModalOpeningButton from "./ModalOpeningButton";

const PreviewBackgroundPicture: FunctionComponent = () => {
    const { width } = useWindowSizes();

    const [{ isOpened: modalIsOpened }, dispatch] = useModalControls();

    if (width < 500) return <></>;

    return (
        <>
            <ModalOpeningButton onClick={() => dispatch({ type: "OPEN_MODAL" })} />

            {modalIsOpened === true && (
                <ImagePreviewModal
                    closeModal={() => dispatch({ type: "CLOSE_MODAL" })} //
                />
            )}
        </>
    );
};

export default PreviewBackgroundPicture;
