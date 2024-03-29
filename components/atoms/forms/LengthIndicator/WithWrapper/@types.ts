// Types
import type { SxProps } from "@/@types/MUI";
import type { LengthIndicatorProps } from "..";
import type { HTMLAttributes, ReactNode } from "react";

export interface WrapperWithWitdthIndicatorProps {
    children: ReactNode;

    column?: boolean;
    wrapperProps?: { sx?: SxProps } & HTMLAttributes<HTMLSpanElement>;

    lengthIndicator: {
        sx: SxProps;
    } & Pick<LengthIndicatorProps, "currentLength" | "max" | "min" | "optional">;
}
