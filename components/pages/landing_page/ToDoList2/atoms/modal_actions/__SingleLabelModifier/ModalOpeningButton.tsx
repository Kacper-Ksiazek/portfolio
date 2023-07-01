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
    tooltip: string;
    size: `${string}px`;

    children: ReactNode;

    small?: boolean;
    primary?: boolean;
    disabled?: boolean;
    className?: string;
    isIconButton?: boolean;

    openModal?: () => void;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, ref) => {
    return (
        <Tooltip title={!props.disabled ? props.tooltip : ""} placement="top">
            <span>
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
                    disabled={props.disabled ?? false}
                    onClick={props.openModal}
                    className={props.className}
                >
                    {props.children}
                </StyledButton>
            </span>
        </Tooltip>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton ";
export default ModalOpeningButton;
