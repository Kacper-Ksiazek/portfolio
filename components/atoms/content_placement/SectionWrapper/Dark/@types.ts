// Types
import type { ReactNode } from "react";
import type { SxProps } from "@mui/material";

export interface HeaderProps {
    index: number;
    main: string | ReactNode;
    description: string | ReactNode;
    icon: ReactNode;

    render?: boolean;
    updatesFrequently?: boolean;
}

export interface DarkSectionWrapperProps {
    children: ReactNode;
    /**
     * Specifies the rotation of two background rectangles.
     */
    shapesDirection: "left" | "right";
    /**
     * Handles section's premade header along with its smaller label
     */
    header: HeaderProps;
    /**
     *  Custom `MaterialUI` styles to be applied to the `sx` attribute of the **section main element**
     */
    sx?: SxProps;
    /**
     * Reference to the code associated with the following project
     */
    githubURL: string;
    //
    className?: string;
    id?: string;
    childrenOutsideContent?: ReactNode;
}
