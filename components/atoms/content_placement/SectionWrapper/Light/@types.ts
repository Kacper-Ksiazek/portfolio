// Types
import type { ReactNode } from "react";
import type { Styles } from "@/@types/MUI";

export interface HeaderAdditionalJSX {
    whenVisible: Styles;
    node: ReactNode;
}

export interface HeaderProps {
    main: string;
    label: string;
    additionalJSX?: HeaderAdditionalJSX;
}

export interface LightSectionWrapperProps {
    /**
     * Specifies more curved top corner
     */
    round: "left" | "right";
    /**
     * Content of the section
     */
    children: ReactNode;
    /**
     * Handles section's premade header along with its smaller label
     */
    header: HeaderProps;
    /**
     * The letter to be displayed in the background
     */
    backgroundLetter?: string;
    /**
     * By default the maximum height of the section wrapper is fixed to **800px**, by setting this property to `true` this one style is never assigned
     */
    unlimitedHeight?: boolean;
    /**
     * The value of id attribute to be assigned to the section
     */
    id?: string;
    /**
     * Custom `MaterialUI` styles to be applied to the `sx` attribute of the **content wrapper**
     */
    contentWrapperSx?: Styles;
    childrenOutsideContentWrapper?: ReactNode;
    backgroundLetterSx?: Styles;
}
