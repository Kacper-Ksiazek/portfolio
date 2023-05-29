// Tools
import { useMemo } from "react";
import { ratio } from "@/utils/ratio";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { useLabelWithParticularID } from "landing_page/ToDoList2/hooks/useLabelWithParticularID";
// Types
import type { ReactNode, FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/@types";
// Styled components
import { ProgressBar } from "landing_page/ToDoList2/atoms/ProgressBar";
import { CompletionTracker, LabelName, SingleLabelWrapper } from "./styled_components";

interface SingleLabelProps {
    labelID?: LabelID;
    width: `${string}%`;
    className?: string;
    progress: {
        inTotal: number;
        completed: number;
        extensiveDescription?: boolean;
        displayLabelNameInstead?: boolean;
    };
}

const SingleLabel: FunctionComponent<SingleLabelProps> = (props) => {
    const { color, labelName } = useLabelWithParticularID(props.labelID ?? null);

    const completion = useMemo<ReactNode>(() => {
        const { completed, inTotal, extensiveDescription, displayLabelNameInstead } = props.progress;
        if (displayLabelNameInstead === true) return labelName;

        return extensiveDescription ? formatTextViaBolding(`*${completed}* out of *${inTotal}* tasks ${completed === 1 ? "has" : "have"} been completed so far`) : `${completed} / ${inTotal}`;
    }, [props.progress, labelName]);

    return (
        <SingleLabelWrapper width={props.width} className={props.className}>
            {labelName && props.progress.displayLabelNameInstead !== true && <LabelName>{labelName}</LabelName>}

            <ProgressBar
                labelColor={color} //
                completion={ratio(props.progress.completed, props.progress.inTotal)}
            />

            <CompletionTracker
                strikeThroughColor={color} //
                isCompleted={props.progress.completed === props.progress.inTotal}
            >
                {completion}
            </CompletionTracker>
        </SingleLabelWrapper>
    );
};

export default SingleLabel;
