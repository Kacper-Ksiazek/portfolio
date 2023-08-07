// Tools
import { forwardRef } from "react";
// Types
import type { HTMLAttributes, ReactNode } from "react";
import type { StyledButtonThemeName } from "@/components/atoms/forms/StyledButton/ComponentColorThemes";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ModalOpeningButtonProps {
    tooltip: string;
    size: `${string}px`;

    children: ReactNode;

    small?: boolean;
    disabled?: boolean;
    isIconButton?: boolean;
    componentThemeID?: StyledButtonThemeName;
    wrapperProps?: Omit<HTMLAttributes<HTMLButtonElement>, "onClick">;

    openModal?: () => void;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, ref) => {
    return (
        <Tooltip title={!props.disabled ? props.tooltip : ""} placement="top">
            <span {...props.wrapperProps} style={{ transform: "translateX(-1px)" }}>
                <StyledButton
                    ref={ref}
                    onClick={props.openModal}
                    iconButton={props.isIconButton}
                    disabled={props.disabled ?? false}
                    componentThemeID={props.componentThemeID}
                    subtleHoverEffect={props.componentThemeID !== "PRIMARY"}
                    sx={{
                        height: props.size,
                        borderRadius: "3px",
                        fontSize: "16px",
                        borderLeftColor: "transparent",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        width: props.isIconButton ? (props.small ? "32px" : "42px") : "100%",
                        svg: {
                            fontSize: props.small ? "20px" : "24px",
                        },
                        "&:hover": {
                            borderTopLeftRadius: "3px",
                            borderBottomLeftRadius: "3px",
                        },
                    }}
                >
                    {props.children}
                </StyledButton>
            </span>
        </Tooltip>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton";
export default ModalOpeningButton;
