// Tools
import { useLabelsContext } from "@/components/pages/landing_page/ToDoList/2023/hooks";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList/2023/@types/Labels";
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

    if (isUrgencyIndicating(props)) {
        return (
            <LabelBase
                isUrgent //
                color="primary"
                className={`urgency ${props.indicateUrgency ? "active" : ""}`}
            >
                <span>URGENT</span>
            </LabelBase>
        );
    }

    const label = getLabelWithID(props.labelID);

    return (
        <LabelBase
            color={label.color} //
            isUrgent={props.isTaskUrgent}
        >
            {label.name}
        </LabelBase>
    );
};

export default Label;
