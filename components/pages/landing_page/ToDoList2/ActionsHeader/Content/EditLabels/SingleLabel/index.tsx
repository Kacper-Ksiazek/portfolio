// Tools
import { useLabelsContext, useLabelsUpdatersContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { SingleTaskCounts } from "../../../@types";
import type { LabelID } from "../../../../context/LabelsContext/@types";

interface SingleLabelProps {
    labelID: LabelID;
    amountOfTasks: SingleTaskCounts;
}

const SingleLabel: FunctionComponent<SingleLabelProps> = (props) => {
    return (
        <>
            <span></span>
        </>
    );
};

export default SingleLabel;
