// Tools
import dynamic from "next/dynamic";
import { styled } from "@mui/material";
import { useEffect, useRef } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
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

    const RectangleOneElement = useRef<HTMLSpanElement | null>(null);
    const RectangleTwoElement = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const index: 1 | 2 = (["General", "Education"] as IceBreakingStage[]).includes(currentIceBreakingStage) ? 1 : 2;

        RectangleOneElement.current?.classList.add(`intro-${index}`);
        RectangleOneElement.current?.classList.remove("outro-1");
        RectangleOneElement.current?.classList.remove("outro-2");

        RectangleTwoElement.current?.classList.add(`intro-${index}`);
        RectangleTwoElement.current?.classList.remove("outro-1");
        RectangleTwoElement.current?.classList.remove("outro-2");

        setTimeout(() => {
            RectangleOneElement.current?.classList.remove(`intro-${index}`);
            RectangleOneElement.current?.classList.add(`outro-${index}`);

            RectangleTwoElement.current?.classList.remove(`intro-${index}`);
            RectangleTwoElement.current?.classList.add(`outro-${index}`);
        }, 1000);
    }, [currentIceBreakingStage]);

    return (
        <ContentWrapper id="content-main-wrapper">
            <ContentOnCertainStage
                stage={previousIceBreakingStage ?? currentIceBreakingStage} //
                suspenceGeneralInfoStageRendering={previousIceBreakingStage === null}
            />

            <Rectangle id="rect-one" ref={RectangleOneElement} />
            <Rectangle id="rect-two" ref={RectangleTwoElement} />

            {width < 1000 && <MobileBottomNavigation />}
        </ContentWrapper>
    );
};

export default BreakTheIceContent;
