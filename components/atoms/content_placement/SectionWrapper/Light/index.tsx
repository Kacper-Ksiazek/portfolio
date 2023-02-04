// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Header from "./Header";
// Styled components
import ContentWrapper from "../_ContentWrapper";
import LightWrapperBase from "./LightWrapperBase";
import BackgroundLetter from "./BackgroundLetter";

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
    header: {
        main: string;
        label: string;
        additionalJSX?: ReactNode;
        /** In order for `VisibilitySensor` to work property. By default it's 95px */
        estimatedHeight?: string;
    };
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
    contentWrapperSx?: SxProps;
    childrenOutsideContentWrapper?: ReactNode;
}

const LightSectionWrapper: FunctionComponent<LightSectionWrapperProps> = (props) => {
    return (
        <LightWrapperBase
            className={[
                props.round === "left" ? "round-left" : "round-right", //
                props.unlimitedHeight ? "" : "limited-height",
            ].join(" ")}
            id={props.id}
        >
            <ContentWrapper sx={props.contentWrapperSx}>
                <Header {...props.header} />
                {props.children}
            </ContentWrapper>
            {props.backgroundLetter && <BackgroundLetter letter={props.backgroundLetter} />}
            {props.childrenOutsideContentWrapper && props.childrenOutsideContentWrapper}
        </LightWrapperBase>
    );
};

LightSectionWrapper.defaultProps = {
    round: "left",
};

export default LightSectionWrapper;
