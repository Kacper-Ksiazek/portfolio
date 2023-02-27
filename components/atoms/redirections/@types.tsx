// Types
import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface RedirectionProps {
    url: string;
    small?: boolean;
    tooltip?: string;
    children: ReactNode;
    className?: string;
    sx?: SxProps;
}
