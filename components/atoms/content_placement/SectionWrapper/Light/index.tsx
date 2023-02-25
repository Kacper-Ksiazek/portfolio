// Types
import type { FunctionComponent } from "react";
import type { LightSectionWrapperProps } from "./@types";
// Other components
import Header from "./Header";
// Styled components
import ContentWrapper from "../_ContentWrapper";
import LightWrapperBase from "./Base";
import BackgroundLetter from "./BackgroundLetter";

const LightSectionWrapper: FunctionComponent<LightSectionWrapperProps> = (props) => {
    return (
        <LightWrapperBase
            className={[
                props.round === "left" ? "round-left" : "round-right", //
                props.unlimitedHeight ? "" : "limited-height",
            ].join(" ")}
            id={props.id}
        >
            <ContentWrapper sx={props.contentWrapperSx as any}>
                <Header {...props.header} />
                {props.children}
            </ContentWrapper>
            {props.backgroundLetter && (
                <BackgroundLetter
                    letter={props.backgroundLetter} //
                    sx={props.backgroundLetterSx ?? {}}
                />
            )}
            {props.childrenOutsideContentWrapper && props.childrenOutsideContentWrapper}
        </LightWrapperBase>
    );
};

LightSectionWrapper.defaultProps = {
    round: "left",
};

export default LightSectionWrapper;
