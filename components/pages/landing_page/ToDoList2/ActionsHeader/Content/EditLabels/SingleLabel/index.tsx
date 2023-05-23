// Tools
import { useLabelsContext, useLabelsUpdatersContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { SingleTaskCounts } from "../../../@types";
import type { LabelID } from "../../../../context/LabelsContext/@types";
// Other components
import Progress from "./Progress";
// Styled components
import LabelIndex from "./LabelIndex";
import Label from "landing_page/ToDoList2/atoms/LabelBase";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface SingleLabelProps {
    index: number;
    labelID: LabelID;
    amountOfTasks: SingleTaskCounts;

    urgentMode: boolean;
}

const SingleLabel: FunctionComponent<SingleLabelProps> = (props) => {
    const { getLabelWithID } = useLabelsContext();

    const label = getLabelWithID(props.labelID);

    return (
        <>
            <LabelIndex index={props.index} />

            <div>
                <Label color={label.color} isUrgent={props.urgentMode}>
                    {label.name}
                </Label>
            </div>

            <Progress
                amountOfTasks={props.amountOfTasks} //
                color={label.color}
            />

            <FlexBox>
                <button>Edit</button>
                <button>Delete</button>
            </FlexBox>
        </>
    );
};

export default SingleLabel;
