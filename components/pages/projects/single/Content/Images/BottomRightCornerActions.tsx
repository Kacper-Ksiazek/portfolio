// Tools
import { useRef } from "react";
import useImagesWrapperContext from "@/components/pages/projects/single/Content/Images/hooks/useImagesWrapperContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import { ImageActionsWrapper, ImagePreviewButton, ImageAction } from "@/components/_styled_components/forms/ImageActions";

const BottomRightCornerActions: FunctionComponent = () => {
    const context = useImagesWrapperContext();

    const featuresButtonElement = useRef<HTMLButtonElement | null>(null);

    const handleFeaturesButtonClick = () => {
        const toggle = () => context.setOpenBrowseFeatures((val) => !val);
        const wrapper = document.getElementById("images-wrapper");

        if (featuresButtonElement.current) featuresButtonElement.current.blur();
        if (wrapper) {
            window.scrollTo({
                top: wrapper.offsetTop + 50,
                behavior: "smooth",
            });
        }
        toggle();
    };

    return (
        <ImageActionsWrapper className="image-actions-wrapper">
            <ImageAction
                ref={featuresButtonElement}
                onClick={handleFeaturesButtonClick} //
                sx={{ width: "190px" }}
            >
                {context.openBrowseFeatures ? `Close features ` : `Browse features`}
            </ImageAction>

            <ImagePreviewButton onClick={() => context.setOpenThumbnailModal(true)} />
        </ImageActionsWrapper>
    );
};

export default BottomRightCornerActions;
