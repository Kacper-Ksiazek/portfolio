// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Search from "@mui/icons-material/Search";
// Styled Components
import StyledButton from "../StyledButton";

const ImageModalButtonBase = styled(StyledButton)(({ theme }) => ({
    padding: "0",
    width: "40px",
    height: "40px",
    svg: {
        fontSize: "24px",
    },
}));

const ImageModalButton: FunctionComponent<ButtonBaseProps> = (props) => {
    return (
        <Tooltip title="Preview" placement="top">
            <ImageModalButtonBase {...(props as any)} color="primary">
                <Search />
            </ImageModalButtonBase>
        </Tooltip>
    );
};

export default ImageModalButton;
