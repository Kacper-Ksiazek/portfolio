// Tools
import { CLASSES } from "landing_page/ToDoList2/css_references";
// Types
import type { FunctionComponent } from "react";
// Other components
import Label from "./Label";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface DefaultModeProps {
    label: string;
    isUrgent: boolean;
    dueDate: string | null;
}

const DefaultMode: FunctionComponent<DefaultModeProps> = (props) => {
    return (
        <FlexBox className={CLASSES.SINGLE_TASK.LABELS_WRAPPER}>
            <Label indicateUrgency={props.isUrgent} />
            <Label label={props.label} />
        </FlexBox>
    );
};

export default DefaultMode;
