// Tools
import { styled } from "@mui/system";
import { useEffect, useRef, useMemo } from "react";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent, MutableRefObject } from "react";
// Other components
import Image from "next/Image";
// Styled components
import Rectangle from "./styled_components/Rectangle";
import PictureWrapper from "./styled_components/PictureWrapper";

const PictureSectionWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    position: "relative",
    overflow: "hidden",
}));

const PictureBase = styled("div")(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    background: theme.palette.primary.main,
}));

const Picture: FunctionComponent = () => {
    const { currentIceBreakingStage, previousIceBreakingStage } = useBreakTheIceContentContext();

    const LeftHorizontalRectangleElement = useRef<HTMLSpanElement | null>(null);
    const LeftVerticalRectangleElement = useRef<HTMLSpanElement | null>(null);
    const RightHorizontalRectangleElement = useRef<HTMLSpanElement | null>(null);
    const RightVerticalRectangleElement = useRef<HTMLSpanElement | null>(null);

    const AllRefs = useMemo<MutableRefObject<HTMLSpanElement | null>[]>(() => {
        return [LeftHorizontalRectangleElement, LeftVerticalRectangleElement, RightHorizontalRectangleElement, RightVerticalRectangleElement];
    }, []);

    useEffect(() => {
        AllRefs.forEach((el) => {
            if (el.current) {
                el.current.classList.remove("outro");
                el.current.classList.add("intro");
            }
        });

        setTimeout(() => {
            AllRefs.forEach((el) => {
                if (el.current) {
                    el.current.classList.remove("intro");
                    el.current.classList.add("outro");
                }
            });
            setTimeout(() => {
                AllRefs.forEach((el) => {
                    if (el.current) {
                        el.current.classList.remove("outro");
                    }
                });
            }, 1200);
        }, 1200);
    }, [AllRefs, currentIceBreakingStage]);

    return (
        <PictureSectionWrapper key={currentIceBreakingStage} id="picture-main-wrapper">
            <PictureWrapper id="picture-direct-wrapper">
                <Rectangle className="left-horizontal" ref={LeftHorizontalRectangleElement} />
                <Rectangle className="left-vertical" ref={LeftVerticalRectangleElement} />
                <Rectangle className="right-horizontal" ref={RightHorizontalRectangleElement} />
                <Rectangle className="right-vertical" ref={RightVerticalRectangleElement} />
                <PictureBase>
                    <Image
                        alt="stage-picture" //
                        src={`/images/landing-page/${previousIceBreakingStage ?? currentIceBreakingStage}.jpg`}
                        layout="fill"
                        priority
                    />
                </PictureBase>
            </PictureWrapper>
        </PictureSectionWrapper>
    );
};

export default Picture;
