// Tools
import { forwardRef } from "react";
// Types
import type { ReactNode } from "react";
import type { BoxProps } from "@mui/material/Box";
import type { StyledButtonThemeName } from "@/components/atoms/forms/StyledButton/ComponentColorThemes";
// Material UI Components
import Box from "@mui/material/Box";
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
    wrapperProps?: Omit<BoxProps, "onClick" | "component">;

    openModal?: () => void;
}

const ModalOpeningButton = forwardRef<HTMLButtonElement, ModalOpeningButtonProps>((props, ref) => {
    return (
        <Tooltip title={!props.disabled ? props.tooltip : ""} placement="top">
            <Box {...props.wrapperProps} component="span">
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
            </Box>
        </Tooltip>
    );
});

ModalOpeningButton.displayName = "ModalOpeningButton";
export default ModalOpeningButton;
