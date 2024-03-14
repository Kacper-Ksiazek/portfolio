// Types
import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";
import type { StyledButtonProps } from "@/components/atoms/forms/StyledButton";

export interface RedirectionProps extends Pick<StyledButtonProps, "componentThemeID"> {
    /** The URL to which the user will be redirected */
    url: string;
    /** If true, the redirection will be smaller */
    small?: boolean;
    /** The tooltip to be displayed when hovering over the redirection */
    tooltip?: string;
    /** The class name of the redirection */
    className?: string;
    /** The style of the redirection */
    sx?: SxProps;
    /** If true, the arrow will be on the opposite side*/
    reverseArrow?: boolean;

    children: ReactNode;
}
