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
    primary?: boolean;

    openModal: () => void;
}

const ModalOpeningButton: FunctionComponent<ModalOpeningButtonProps> = (props) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <ButtonBase
                sx={(theme) => ({
                    height: props.size,
                    borderRadius: "3px",
                    marginLeft: props.small ? "2px" : "4px",
                    fontSize: "16px",
                    border: "1px solid",
                    svg: {
                        fontSize: "28px",
                    },
                    ...(props.primary
                        ? {
                              background: theme.palette.primary.main,
                              borderColor: theme.palette.primary.main,
                              transition: "all .3s",
                              "&:hover": {
                                  background: "#fff",
                                  color: theme.palette.primary.main,
                              },
                          }
                        : {
                              background: alpha("#000", 0.2),
                              borderColor: alpha("#fff", 0.23),
                          }),
                    ...(props.isIconButton
                        ? {
                              width: props.size,
                          }
                        : {
                              padding: "4px 10px",
                          }),
                })}
                onClick={props.openModal}
            >
                {props.children}
            </ButtonBase>
        </Tooltip>
    );
};

export default ModalOpeningButton;
