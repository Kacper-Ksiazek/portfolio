// Tools
import { useLandingScreenContext } from "@/components/pages/projects/single/LandingSection/hooks/useLandingScreenContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Description from "@mui/icons-material/Description";
import Panorama from "@mui/icons-material/Panorama";
// Styled components
import IconWrapper from "./styled_components/IconWrapper";
import ThumbnailPreviewBase from "./styled_components/ThumbnailPreviewBase";

const ThumbnailPreview: FunctionComponent = (props) => {
    const context = useLandingScreenContext();

    return (
        <ThumbnailPreviewBase id="project-thumbnail-preview-wrapper" className={context.previewThumbnail ? "preview-thumbnail" : ""}>
            <Tooltip title="Core information" placement="left">
                <IconWrapper
                    className={!context.previewThumbnail ? "active" : ""} //
                    role="button"
                    onClick={context.closeThumbnailPreview}
                >
                    <Description />
                </IconWrapper>
            </Tooltip>

            <Tooltip title="Thumbnail preview" placement="left">
                <IconWrapper
                    className={context.previewThumbnail ? "active" : ""} //
                    role="button"
                    onClick={context.openThumbnailPreview}
                >
                    <Panorama />
                </IconWrapper>
            </Tooltip>
        </ThumbnailPreviewBase>
    );
};

export default ThumbnailPreview;
