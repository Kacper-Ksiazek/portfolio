// Types
import type { SxProps } from "@mui/system";
import type { ReactNode } from "react";

export interface RedirectionProps {
    url: string;
    small?: boolean;
    tooltip?: string;
    children: ReactNode;
    className?: string;
    sx?: SxProps;
}
