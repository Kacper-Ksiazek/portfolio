// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Textsms from "@mui/icons-material/Textsms";
import Panorama from "@mui/icons-material/Panorama";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
import FormControlLabel from "@mui/material/FormControlLabel";
// Styled components
const ThumbnailPreviewBase = styled("div")(({ theme }) => ({
    display: "flex",
    borderRadius: "3px",
}));

const IconWrapper = styled("div")(({ theme }) => ({
    width: "42px",
    height: "42px",
    display: "flex",
    borderRadius: "3px",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    "&.active": {
        background: theme.palette.primary.main,
        color: "#fff",
    },
    "&:not(&:nth-of-type(1))": {
        marginLeft: "8px",
    },
}));

interface ThumbnailPreviewProps {
    //
}

const ThumbnailPreview: FunctionComponent<ThumbnailPreviewProps> = (props) => {
    return (
        <ThumbnailPreviewBase>
            <IconWrapper className="active" role="button">
                <Textsms />
            </IconWrapper>
            <IconWrapper role="button">
                <Panorama />
            </IconWrapper>
        </ThumbnailPreviewBase>
    );
};

export default ThumbnailPreview;
