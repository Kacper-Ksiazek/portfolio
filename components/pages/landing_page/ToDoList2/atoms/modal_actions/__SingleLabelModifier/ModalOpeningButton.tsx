// Tools
import { forwardRef } from "react";
import { alpha } from "@mui/material/styles";
// Types
import type { ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ModalOpeningButtonProps {
    small?: boolean;
    size: `${string}px`;
    children: ReactNode;
    tooltip: string;
    isIconButton?: boolean;
    primary?: boolean;
    openModal?: () => void;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, ref) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <StyledButton
                ref={ref}
                color={props.primary ? "primary" : "MUIFormElement"}
                sx={(theme) => ({
                    height: props.size,
                    borderRadius: "3px",
                    marginLeft: props.small ? "4px" : "6px",
                    fontSize: "16px",
                    svg: {
                        fontSize: "20px",
                        marginRight: "2px",
                    },
                })}
                onClick={props.openModal}
            >
                {props.children}
            </StyledButton>
        </Tooltip>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton ";
export default ModalOpeningButton;
