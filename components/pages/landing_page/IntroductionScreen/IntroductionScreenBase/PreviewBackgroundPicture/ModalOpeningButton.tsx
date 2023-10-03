// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Panorama from "@mui/icons-material/Panorama";
// Styled components

const PreviewBackgroundPictureBase = styled(Button)(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    bottom: "64px",
    right: "128px",
    minWidth: "auto",
    padding: "6px 16px",
    color: theme.palette.background.lightAnimationBar,
    borderRadius: "4px",
    svg: {
        fontSize: "24px",
    },
    animation: `${fadeSimple} .3s 6s both linear`,
    ["@media (max-width:1600px)"]: {
        bottom: "32px",
        right: "32px",
    },
    ["@media (max-width:500px)"]: {
        bottom: "16px",
        right: "16px",
    },
}));

interface ModalOpeningButtonProps {
    onClick: () => void;
}

const ModalOpeningButton: FunctionComponent<ModalOpeningButtonProps> = (props) => {
    return (
        <Tooltip title="Preview background photo" placement="top">
            <PreviewBackgroundPictureBase
                variant="outlined" //
                color="inherit"
                onClick={props.onClick}
                id="background-picture-preview-button"
            >
                <Panorama />
            </PreviewBackgroundPictureBase>
        </Tooltip>
    );
};

export default ModalOpeningButton;
