// Tools
import { forwardRef } from "react";
// Types
import type { ForwardRefExoticComponent } from "react";
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Styled components
import StyledButton from "../StyledButton";
import ImageActionsWrapper from "./ImageActionsWrapper";
import ImagePreviewButton from "./ImagePreviewButton";

const ImageAction: ForwardRefExoticComponent<ButtonBaseProps> = forwardRef((props, ref) => {
    return (
        <StyledButton
            ref={ref}
            {...(props as any)} //
            color="primary"
            className={`${props.className} image-action`}
        >
            {props.children}
        </StyledButton>
    );
});

ImageAction.displayName = "ImageActionButton";

export { ImageActionsWrapper, ImagePreviewButton, ImageAction };
