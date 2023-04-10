// Tools
import { useLabelsContext } from "@/components/pages/landing_page/ToDoList2/hooks";
import { CLASSES } from "@/components/pages/landing_page/ToDoList2/css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
import LabelBase from "./Base";

interface PropsWithLabel {
    label: string;
    isTaskUrgent: boolean;
}
interface PropsIndicatingUrgency {
    indicateUrgency: boolean;
}

function isUrgencyIndicating(props: unknown): props is PropsIndicatingUrgency {
    return typeof props === "object" && props !== null && ("indicateUrgency" as keyof PropsIndicatingUrgency) in props;
}

const Label: FunctionComponent<PropsWithLabel | PropsIndicatingUrgency> = (props) => {
    const { getCorrespondingColor } = useLabelsContext();
    const className = CLASSES.SINGLE_TASK.LABEL;

    if (isUrgencyIndicating(props)) {
        return (
            <LabelBase className={`${className} urgency ${props.indicateUrgency ? "active" : ""}`}>
                <span>URGENT</span>
            </LabelBase>
        );
    }

    const color = getCorrespondingColor(props.label);
    const { isTaskUrgent } = props;

    return (
        <LabelBase
            sx={
                isTaskUrgent
                    ? {
                          color: "#fff",
                          background: color,
                          borderColor: color,
                      }
                    : {
                          color,
                          borderColor: color,
                      }
            }
            className={className}
        >
            {props.label}
        </LabelBase>
    );
};

export default Label;
