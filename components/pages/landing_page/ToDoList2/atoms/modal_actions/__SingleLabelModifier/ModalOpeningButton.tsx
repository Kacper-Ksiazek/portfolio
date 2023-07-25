// Tools
import { forwardRef } from "react";
// Types
import type { HTMLAttributes, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ModalOpeningButtonProps {
    tooltip: string;
    size: `${string}px`;

    children: ReactNode;

    small?: boolean;
    primary?: boolean;
    disabled?: boolean;
    isIconButton?: boolean;

    wrapperProps?: Omit<HTMLAttributes<HTMLButtonElement>, "onClick">;

    openModal?: () => void;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, ref) => {
    return (
        <Tooltip title={!props.disabled ? props.tooltip : ""} placement="top">
            <span
                {...props.wrapperProps}
                style={{
                    marginLeft: props.small ? "4px" : "6px",
                }}
            >
                <StyledButton
                    ref={ref}
                    onClick={props.openModal}
                    iconButton={props.isIconButton}
                    disabled={props.disabled ?? false}
                    componentThemeID={props.primary ? "PRIMARY" : "MUI"}
                    subtleHoverEffect={props.primary !== true}
                    sx={{
                        height: props.size,
                        borderRadius: "3px",
                        fontSize: "16px",
                        width: props.isIconButton ? (props.small ? "32px" : "42px") : "100%",
                        svg: {
                            fontSize: props.small ? "20px" : "24px",
                        },
                    }}
                >
                    {props.children}
                </StyledButton>
            </span>
        </Tooltip>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton ";
export default ModalOpeningButton;
