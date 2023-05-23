// Tools
import { useLabelsContext } from "@/components/pages/landing_page/ToDoList2/hooks";
import { CLASSES } from "@/components/pages/landing_page/ToDoList2/css_references";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/context/LabelsContext/@types";
// Styled components
import LabelBase from "./Base";

interface PropsWithLabel {
    labelID: LabelID;
    isTaskUrgent: boolean;
}
interface PropsIndicatingUrgency {
    indicateUrgency: boolean;
}

function isUrgencyIndicating(props: unknown): props is PropsIndicatingUrgency {
    return typeof props === "object" && props !== null && ("indicateUrgency" as keyof PropsIndicatingUrgency) in props;
}

const Label: FunctionComponent<PropsWithLabel | PropsIndicatingUrgency> = (props) => {
    const { getLabelWithID } = useLabelsContext();
    const className = CLASSES.SINGLE_TASK.LABEL;

    if (isUrgencyIndicating(props)) {
        return (
            <LabelBase className={`${className} urgency ${props.indicateUrgency ? "active" : ""}`} isUrgent color="primary">
                <span>URGENT</span>
            </LabelBase>
        );
    }

    const label = getLabelWithID(props.labelID);

    return (
        <LabelBase
            color={label.color} //
            className={className}
            isUrgent={props.isTaskUrgent}
        >
            {label.name}
        </LabelBase>
    );
};

export default Label;
