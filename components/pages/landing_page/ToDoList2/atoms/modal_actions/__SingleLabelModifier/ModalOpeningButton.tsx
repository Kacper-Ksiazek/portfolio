// Tools
import { forwardRef } from "react";
// Types
import type { HTMLAttributes, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ModalOpeningButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
    tooltip: string;
    size: `${string}px`;

    children: ReactNode;

    id?: string;
    small?: boolean;
    primary?: boolean;
    disabled?: boolean;
    className?: string;
    isIconButton?: boolean;

    openModal?: () => void;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, ref) => {
    const { disabled, tooltip, primary, openModal, children, id, className, ...propsToForward } = props;
    return (
        <Tooltip title={!disabled ? tooltip : ""} placement="top">
            <span
                id={id}
                className={className}
                style={{
                    marginLeft: props.small ? "4px" : "6px",
                }}
            >
                <StyledButton
                    {...propsToForward}
                    ref={ref}
                    color={primary ? "primary" : "MUIFormElement"}
                    sx={(theme) => ({
                        height: props.size,
                        borderRadius: "3px",
                        fontSize: "16px",
                        width: "100%",
                        svg: {
                            fontSize: "20px",
                            marginRight: "2px",
                        },
                    })}
                    disabled={disabled ?? false}
                    onClick={openModal}
                >
                    {children}
                </StyledButton>
            </span>
        </Tooltip>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton ";
export default ModalOpeningButton;
