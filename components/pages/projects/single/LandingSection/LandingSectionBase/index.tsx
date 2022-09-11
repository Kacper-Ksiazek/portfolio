// Tools
import { useLandingScreenContext } from "@/components/pages/projects/single/LandingSection/hooks/useLandingScreenContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Thumbnail from "./Thumbnail";
// Styled components
import SectionBase from "./styled_components/SectionBase";
import ContentWrapper from "./styled_components/ContentWrapper";

interface LandingSectionBaseProps {
    folder: string;
    children: ReactNode;
}

const LandingSectionBase: FunctionComponent<LandingSectionBaseProps> = (props) => {
    const context = useLandingScreenContext();

    return (
        <SectionBase
            className={[
                "round-right", //
                context.isHovered ? "is-hovered" : "",
                context.previewThumbnail ? "preview-mode" : "",
            ].join(" ")}
        >
            <Thumbnail folder={props.folder} />
            <ContentWrapper
                id="project-landing-screen-content-wrapper" //
                className={context.contentAnimation}
            >
                {props.children}
            </ContentWrapper>
        </SectionBase>
    );
};

export default LandingSectionBase;
