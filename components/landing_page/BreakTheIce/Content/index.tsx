// Tools
import { useEffect, useRef } from "react";
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/landing_page/BreakTheIce/@types";
// Other components
import ContentOnCertainStage from "./ContentOnCertainStage";
// Styled components
import Rectangle from "./_Rectangle";

const ContentWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    position: "relative",
    overflow: "hidden",
}));

interface BreakTheIceContentProps {
    stage: IceBreakingStage;
    previousStage: IceBreakingStage | null;
}

const BreakTheIceContent: FunctionComponent<BreakTheIceContentProps> = (props) => {
    const RectangleOneElement = useRef<HTMLSpanElement | null>(null);
    const RectangleTwoElement = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const index: 1 | 2 = (["General", "Education"] as IceBreakingStage[]).includes(props.stage) ? 1 : 2;

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
    }, [props.stage]);

    return (
        <ContentWrapper>
            <ContentOnCertainStage stage={props.previousStage ? props.previousStage : props.stage} />

            <Rectangle id="rect-one" ref={RectangleOneElement} />
            <Rectangle id="rect-two" ref={RectangleTwoElement} />
        </ContentWrapper>
    );
};

export default BreakTheIceContent;
