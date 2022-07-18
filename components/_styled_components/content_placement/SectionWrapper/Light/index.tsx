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
    backgroundLetter: string;
}

const LightSectionWrapper: FunctionComponent<LightSectionWrapperProps> = (props) => {
    return (
        <LightWrapperBase
            className={[
                props.round === "left" ? "round-left" : "round-right", //
            ].join(" ")}
        >
            <ContentWrapper>
                <Header {...props.header} />
                {props.children}
            </ContentWrapper>
            <BackgroundLetter letter={props.backgroundLetter} />
        </LightWrapperBase>
    );
};

export default LightSectionWrapper;
