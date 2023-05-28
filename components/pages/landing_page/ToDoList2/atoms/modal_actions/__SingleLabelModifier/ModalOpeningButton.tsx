// Tools
import { alpha } from "@mui/material/styles";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
import ButtonBase from "@mui/material/ButtonBase";

interface ModalOpeningButtonProps {
    small?: boolean;
    size: `${string}px`;
    icon: ReactNode;

    openModal: () => void;
}

const ModalOpeningButton: FunctionComponent<ModalOpeningButtonProps> = (props) => {
    return (
        <Tooltip title="Create a new label" placement="top">
            <ButtonBase
                sx={{
                    width: props.size,
                    height: props.size,
                    fontSize: "28px",
                    background: alpha("#000", 0.2),
                    border: `1px solid  ${alpha("#fff", 0.23)}`,
                    borderRadius: "3px",
                    marginLeft: props.small ? "2px" : "4px",
                }}
                className="alternative-font-family"
                onClick={props.openModal}
            >
                {props.icon}
            </ButtonBase>
        </Tooltip>
    );
};

export default ModalOpeningButton;
