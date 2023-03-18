// Tools
import { usePlayIntroAnimation } from "./hooks/usePlayIntroAnimation";
import { useBackgroundShapesRefs } from "./hooks/useBackgroundShapesRefs";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/image";
// Styled components
import { PictureWrapper, ImageDirectWrapper, BackgroundRectangle, PictureSection } from "./styled_components";

const Picture: FunctionComponent = () => {
    const { currentIceBreakingStage, previousIceBreakingStage } = useBreakTheIceContentContext();
    const playIntroAnimation: boolean = usePlayIntroAnimation();
    const refs = useBackgroundShapesRefs(currentIceBreakingStage);

    return (
        <PictureSection
            key={currentIceBreakingStage} //
            id="picture-main-wrapper"
            className={playIntroAnimation ? "play-intro-animation" : ""}
        >
            <PictureWrapper id="picture-direct-wrapper">
                <BackgroundRectangle id="LEFT_HORIZONTAL" ref={refs.LEFT_HORIZONTAL} />
                <BackgroundRectangle id="LEFT_VERTICAL" ref={refs.LEFT_VERTICAL} />
                <BackgroundRectangle id="RIGHT_HORIZONTAL" ref={refs.RIGHT_HORIZONTAL} />
                <BackgroundRectangle id="RIGHT_VERTICAL" ref={refs.RIGHT_VERTICAL} />

                <ImageDirectWrapper>
                    <Image
                        alt="stage-picture" //
                        src={`/images/landing-page/${previousIceBreakingStage ?? currentIceBreakingStage}.jpg`}
                        layout="fill"
                        unoptimized
                    />
                </ImageDirectWrapper>
            </PictureWrapper>
        </PictureSection>
    );
};

export default Picture;
