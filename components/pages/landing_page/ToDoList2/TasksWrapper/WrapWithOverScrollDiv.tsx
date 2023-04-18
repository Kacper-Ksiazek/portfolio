// Types
import type { ReactNode, FunctionComponent } from "react";
// Other components
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

interface WrapWithOverScrollDivProps {
    children: ReactNode;
    amountOfTasks: number;
    ghostRecords: ReactNode;
}

const WrapWithOverScrollDiv: FunctionComponent<WrapWithOverScrollDivProps> = (props) => {
    if (props.amountOfTasks > 4) {
        return (
            <OverflowScrollDiv maxHeight="406px">
                {/*  */}
                {props.children}
            </OverflowScrollDiv>
        );
    }

    return (
        <>
            {props.children}
            {props.amountOfTasks < 4 && props.ghostRecords}
        </>
    );
};

export default WrapWithOverScrollDiv;
