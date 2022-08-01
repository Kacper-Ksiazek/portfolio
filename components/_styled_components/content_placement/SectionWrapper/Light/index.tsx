// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Header from "./Header";
// Styled components
import ContentWrapper from "../_ContentWrapper";
import LightWrapperBase from "./LightWrapperBase";
import BackgroundLetter from "./BackgroundLetter";

interface LightSectionWrapperProps {
    round: "left" | "right";
    children: ReactNode;
    header: {
        main: string;
        label: string;
        additionalJSX?: ReactNode;
    };
    backgroundLetter?: string;
    /** By default the maximum height of the section wrapper is fixed to **800px**, by setting this property to `true` this one style is never assigned */
    unlimitedHeight?: boolean;
    id?: string;
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
            <ContentWrapper>
                <Header {...props.header} />
                {props.children}
            </ContentWrapper>
            {props.backgroundLetter && <BackgroundLetter letter={props.backgroundLetter} />}
        </LightWrapperBase>
    );
};

export default LightSectionWrapper;
