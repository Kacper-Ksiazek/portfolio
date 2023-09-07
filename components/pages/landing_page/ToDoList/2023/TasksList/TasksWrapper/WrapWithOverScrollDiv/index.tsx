// Tools
import dynamic from "next/dynamic";
// Types
import type { ReactNode, FunctionComponent } from "react";
// Other components
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

const GhostRecords = dynamic(() => import("./GhostRecords"));

interface WrapWithOverScrollDivProps {
    children: ReactNode;
    amountOfTasks: number;
}

const WrapWithOverScrollDiv: FunctionComponent<WrapWithOverScrollDivProps> = (props) => {
    if (props.amountOfTasks > 4) {
        return (
            <OverflowScrollDiv maxHeight="580px" mimimumViewportWidthToKeepScrollability="0px">
                {props.children}
            </OverflowScrollDiv>
        );
    }

    return (
        <>
            {props.children}
            {props.amountOfTasks < 4 && <GhostRecords amountOfTasks={props.amountOfTasks} />}
        </>
    );
};

export default WrapWithOverScrollDiv;
