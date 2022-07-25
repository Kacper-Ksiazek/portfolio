// Tools
import useImagesWrapperContext from "@/components/pages/projects/single/Images/hooks/useImagesWrapperContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import { ImageActionsWrapper, ImagePreviewButton, ImageAction } from "@/components/_styled_components/forms/ImageActions";

const BottomRightCornerActions: FunctionComponent = () => {
    const context = useImagesWrapperContext();

    return (
        <ImageActionsWrapper>
            <ImageAction onClick={() => context.setOpenBrowseFeatures(true)}>Browse features</ImageAction>
            <ImagePreviewButton onClick={() => context.setOpenThumbnailModal(true)} />
        </ImageActionsWrapper>
    );
};

export default BottomRightCornerActions;
