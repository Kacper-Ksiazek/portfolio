// Tools
import dynamic from "next/dynamic";
import { styled } from "@mui/material";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useRectengularAnimations } from "./hooks/useRectengularAnimations";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import ContentOnCertainStage from "./ContentOnCertainStage";
const MobileBottomNavigation = dynamic(() => import("./MobileBottomNavigation"));
// Styled components
import Rectangle from "./_Rectangle";

const ContentWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    position: "relative",
    overflow: "hidden",
    cursor: "default",
    display: "flex",
    minHeight: "400px",
    flexDirection: "column",
}));

const BreakTheIceContent: FunctionComponent = () => {
    const { width } = useWindowSizes();
    const { currentIceBreakingStage, previousIceBreakingStage } = useBreakTheIceContentContext();

    const { RectangleOneRef, RectangleTwoRef } = useRectengularAnimations(currentIceBreakingStage);

    return (
        <ContentWrapper id="content-main-wrapper">
            <ContentOnCertainStage
                stage={previousIceBreakingStage ?? currentIceBreakingStage} //
                suspenceGeneralInfoStageRendering={previousIceBreakingStage === null}
            />

            <Rectangle id="rect-one" ref={RectangleOneRef} />
            <Rectangle id="rect-two" ref={RectangleTwoRef} />

            {width < 1000 && <MobileBottomNavigation />}
        </ContentWrapper>
    );
};

export default BreakTheIceContent;
