// Tools
import { usePlayIntroAnimation } from "./hooks/usePlayIntroAnimation";
import { useBackgroundShapesRefs } from "./hooks/useBackgroundShapesRefs";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Image from "next/image";
// Styled components
import { PictureBase, PictureSectionWrapper, PictureWrapper, Rectangle } from "./styled_components";

const Picture: FunctionComponent = () => {
    const { currentIceBreakingStage, previousIceBreakingStage } = useBreakTheIceContentContext();
    const playIntroAnimation: boolean = usePlayIntroAnimation();
    const refs = useBackgroundShapesRefs(currentIceBreakingStage);

    return (
        <PictureSectionWrapper
            key={currentIceBreakingStage} //
            id="picture-main-wrapper"
            className={playIntroAnimation ? "play-intro-animation" : ""}
        >
            <PictureWrapper id="picture-direct-wrapper">
                <Rectangle className="left-horizontal" ref={refs.LeftHorizontalRectangleElement as any} />
                <Rectangle className="left-vertical" ref={refs.LeftVerticalRectangleElement as any} />
                <Rectangle className="right-horizontal" ref={refs.RightHorizontalRectangleElement as any} />
                <Rectangle className="right-vertical" ref={refs.RightVerticalRectangleElement as any} />
                <PictureBase>
                    <Image
                        alt="stage-picture" //
                        src={`/images/landing-page/${previousIceBreakingStage ?? currentIceBreakingStage}.jpg`}
                        layout="fill"
                        unoptimized
                    />
                </PictureBase>
            </PictureWrapper>
        </PictureSectionWrapper>
    );
};

export default Picture;
