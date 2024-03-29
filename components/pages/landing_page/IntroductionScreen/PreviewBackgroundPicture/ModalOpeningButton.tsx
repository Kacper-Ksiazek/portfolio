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
import StyledButton from "components/atoms/forms/StyledButton";

const PreviewBackgroundPictureBase = styled(StyledButton)(({ theme }) => ({
    position: "absolute",
    zIndex: 20,
    bottom: "64px",
    right: "128px",
    minWidth: "auto",
    padding: "6px 16px",
    borderRadius: "4px",
    background: "transparent",
    borderWidth: "2px",
    "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
    },
    svg: {
        fontSize: "24px",
        marginRight: "6px",
    },
    animation: `${fadeSimple} .3s 6s both linear`,
    "@media (max-width:1600px)": {
        bottom: "32px",
        right: "32px",
    },
    "@media (max-width:1100px)": {
        svg: {
            marginRight: "0",
        },
        "span.text": {
            display: "none",
        },
    },
    "@media (max-width:500px)": {
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
                id="background-picture-preview-button" //
                componentThemeID="PRIMARY"
                onClick={props.onClick}
            >
                <Panorama />
                <span className="text">Preview background</span>
            </PreviewBackgroundPictureBase>
        </Tooltip>
    );
};

export default ModalOpeningButton;
