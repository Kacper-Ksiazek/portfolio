// Tools
import { useState } from "react";
import { uploadedProjectImageURLBuilder } from "@/utils/client/uploaded_image_url_builder/project";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Image from "next/Image";
// Styled components
import ImageMask from "./styled_components/ImageMask";
import SectionBase from "./styled_components/SectionBase";
import ImageWrapper from "./styled_components/ImageWrapper";
import ContentWrapper from "./styled_components/ContentWrapper";

type AnimationsSet = "hide-content" | "display-content" | "intro-animation";
interface LandingSectionBaseProps {
    folder: string;
    isHovered: boolean;
    children: ReactNode;
}

const LandingSectionBase: FunctionComponent<LandingSectionBaseProps> = (props) => {
    const [animationsToDisplay, setAnimationsToDisplay] = useState<AnimationsSet>("intro-animation");

    return (
        <SectionBase
            className={[
                "round-right", //
                props.isHovered ? "is-hovered" : "",
            ].join(" ")}
        >
            <ImageWrapper id="project-landing-screen-image-wrapper">
                <Image
                    alt="Project thumbnail"
                    src={uploadedProjectImageURLBuilder({
                        folder: props.folder,
                        resolution: "fullsize",
                        subject: "thumbnail",
                    })}
                    layout="fill"
                    priority
                />
            </ImageWrapper>
            <ImageMask />
            <ContentWrapper
                id="project-landing-screen-content-wrapper" //
                className={[animationsToDisplay].join(" ")}
            >
                {props.children}
            </ContentWrapper>
        </SectionBase>
    );
};

export default LandingSectionBase;
