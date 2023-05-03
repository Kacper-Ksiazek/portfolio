// Tools
import { alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
import ButtonBase from "@mui/material/ButtonBase";
// Material UI Icons
import CloseRounded from "@mui/icons-material/CloseRounded";
// Styled components
const ClearButtonWrapper = styled("span")(({ theme }) => ({
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    ".MuiButtonBase-root": {
        border: "none",
        "&.Mui-disabled": {
            color: alpha("#fff", 0.1),
        },
        "&:not(&.Mui-disabled)": {
            "&:hover": {
                color: "#fff",
            },
        },
    },
}));
interface ClearButtonProps {
    disabled: boolean;
    clear: () => void;
}

const ClearButton: FunctionComponent<ClearButtonProps> = (props) => {
    function onClick() {
        if (props.disabled === false) props.clear();
    }

    return (
        <Tooltip title={props.disabled ? "" : "Clear"} placement="top">
            <ClearButtonWrapper>
                <ButtonBase onClick={onClick} disabled={props.disabled}>
                    <CloseRounded sx={{ fontSize: "22px" }} />
                </ButtonBase>
            </ClearButtonWrapper>
        </Tooltip>
    );
};

export default ClearButton;
