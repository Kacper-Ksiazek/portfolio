// Tools
import { useRef } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { LabelID, TaskCounts } from "landing_page/ToDoList2/@types";
// Other components
import Progress from "./Progress";
import * as ActionsButtons from "./ActionsButtons";
// Styled components
import LabelIndex from "./LabelIndex";
import Label from "landing_page/ToDoList2/atoms/LabelBase";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface SingleLabelProps {
    index: number;
    labelID: LabelID;
    amountOfTasks: TaskCounts;

    urgentMode: boolean;
}

const SingleLabel: FunctionComponent<SingleLabelProps> = (props) => {
    const { getLabelWithID } = useLabelsContext();

    const label = getLabelWithID(props.labelID);

    return (
        <>
            <LabelIndex index={props.index} />

            <FlexBox center>
                <Label color={label.color} isUrgent={props.urgentMode}>
                    {label.name}
                </Label>
            </FlexBox>

            <Progress
                amountOfTasks={props.amountOfTasks} //
                color={label.color}
            />

            <FlexBox>
                <ActionsButtons.Edit
                    labelID={props.labelID}
                    label={label}
                    modalOpeningButtonPrompt="Edit"
                    //
                />
                <ActionsButtons.Delete
                    label={label} //
                    labelID={props.labelID}
                    disabled={props.amountOfTasks.inTotal !== 0}
                />
            </FlexBox>
        </>
    );
};

export default SingleLabel;
