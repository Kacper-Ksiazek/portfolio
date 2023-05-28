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
    children: ReactNode;
    tooltip: string;
    isIconButton: boolean;

    openModal: () => void;
}

const ModalOpeningButton: FunctionComponent<ModalOpeningButtonProps> = (props) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <ButtonBase
                sx={{
                    height: props.size,
                    background: alpha("#000", 0.2),
                    border: `1px solid  ${alpha("#fff", 0.23)}`,
                    borderRadius: "3px",
                    marginLeft: props.small ? "2px" : "4px",
                    fontSize: "16px",
                    ...(props.isIconButton
                        ? {
                              width: props.size,
                              svg: {
                                  fontSize: "28px",
                              },
                          }
                        : {
                              padding: "4px 10px",
                          }),
                }}
                onClick={props.openModal}
            >
                {props.children}
            </ButtonBase>
        </Tooltip>
    );
};

export default ModalOpeningButton;
