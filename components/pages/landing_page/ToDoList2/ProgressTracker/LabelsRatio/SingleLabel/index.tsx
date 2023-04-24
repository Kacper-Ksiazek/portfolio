// Tools
import { useMemo } from "react";
import { ratio } from "../../utils/ratio";
import { useLabelsContext } from "../../../hooks";
// Types
import type { ReactNode, FunctionComponent } from "react";
// Styled components
import { ProgressBar } from "../../styled_components/ProgressBar";
import { CompletionTracker, LabelName, SingleLabelWrapper } from "./styled_components";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";

interface SingleLabelProps {
    label?: string;
    width: `${string}%`;
    progress: {
        inTotal: number;
        completed: number;
        extensiveDescription?: boolean;
        displayLabelNameInstead?: boolean;
    };
}

const SingleLabel: FunctionComponent<SingleLabelProps> = (props) => {
    const { getCorrespondingColor } = useLabelsContext();

    const backgroundColor = props.label ? getCorrespondingColor(props.label) : undefined;

    const completion = useMemo<ReactNode>(() => {
        const { completed, inTotal, extensiveDescription, displayLabelNameInstead } = props.progress;
        if (displayLabelNameInstead === true) return props.label;

        return extensiveDescription ? formatTextViaBolding(`*${completed}* out of *${inTotal}* have been completed so far`) : `${completed} / ${inTotal}`;
    }, [props.progress, props.label]);

    return (
        <SingleLabelWrapper width={props.width}>
            {props.label && props.progress.displayLabelNameInstead !== true && <LabelName>{props.label}</LabelName>}

            <ProgressBar
                color={backgroundColor} //
                completion={ratio(props.progress.completed, props.progress.inTotal)}
            />

            <CompletionTracker
                strikeThroughColor={backgroundColor} //
                isCompleted={props.progress.completed === props.progress.inTotal}
            >
                {completion}
            </CompletionTracker>
        </SingleLabelWrapper>
    );
};

export default SingleLabel;
