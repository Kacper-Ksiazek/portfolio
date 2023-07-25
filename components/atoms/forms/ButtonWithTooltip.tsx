// Types
import type { SxProps } from "@mui/material";
import type { FunctionComponent, ReactNode } from "react";
import type { StyledButtonThemeName } from "@/components/atoms/forms/StyledButton/ComponentColorThemes";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ButtonWithTooltipProps {
    tooltip: string;
    icon: ReactNode;
    componentThemeID: StyledButtonThemeName;

    onClick: () => void;

    sx?: SxProps;
    className?: string;
}

const ButtonWithTooltip: FunctionComponent<ButtonWithTooltipProps> = (props) => {
    return (
        <Tooltip title={props.tooltip} placement="top">
            <StyledButton
                onClick={props.onClick} //
                className={props.className}
                componentThemeID={props.componentThemeID}
                sx={{ width: "42px", height: "42px", ...props.sx }}
            >
                {props.icon}
            </StyledButton>
        </Tooltip>
    );
};

export default ButtonWithTooltip;
