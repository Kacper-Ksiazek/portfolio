// Types
import type { ReactNode } from "react";
import type { SxProps } from "@mui/system";

export interface HeaderProps {
    index: number;
    main: string;
    description: string;
    icon: ReactNode;
}

export interface DarkSectionWrapperProps {
    children: ReactNode;
    /**
     * Specifies the rotation of two background rectangles.
     */
    shapesDirection?: "left" | "right";
    /**
     * Handles section's premade header along with its smaller label
     */
    header: HeaderProps;
    /**
     *  Custom `MaterialUI` styles to be applied to the `sx` attribute of the **section main element**
     */
    sx?: SxProps;
    /**
     * allback which is fired once when the element appears on the screen
     * */
    onVisible?: () => void;
    /**
     * Reference to the code associated with the following project
     */
    githubURL: string;
}
