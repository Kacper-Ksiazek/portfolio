// Types
import type { FunctionComponent } from "react";
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Styled components
import StyledButton from "../StyledButton";
import ImageActionsWrapper from "./ImageActionsWrapper";
import ImagePreviewButton from "./ImagePreviewButton";

const ImageAction: FunctionComponent<ButtonBaseProps> = (props) => {
    return (
        <StyledButton {...(props as any)} color="primary" className={`${props.className} image-action`}>
            {props.children}
        </StyledButton>
    );
};

export { ImageActionsWrapper, ImagePreviewButton, ImageAction };
