// Tools
import { CSS_REFERENCES } from "../css_references";
import { useLabelsContext } from "landing_page/ToDoList/2023/hooks";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList/2023/@types/Labels";
import type { TaskCounts } from "landing_page/ToDoList/2023/@types/Counters";
// Other components
import Progress from "./Progress";
import * as ActionsButtons from "./ActionsButtons";
// Styled components
import LabelIndex from "./LabelIndex";
import Label from "landing_page/ToDoList/2023/atoms/LabelBase";
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
        <FlexBox className={CSS_REFERENCES.TABLE.ROW_WRAPPER}>
            <LabelIndex index={props.index} className={CSS_REFERENCES.TABLE.INDEX} />

            <FlexBox center className={CSS_REFERENCES.TABLE.LABEL_NAME}>
                <Label color={label.color} isUrgent={props.urgentMode}>
                    {label.name}
                </Label>
            </FlexBox>

            <Progress
                amountOfTasks={props.amountOfTasks} //
                color={label.color}
                wrapperProps={{
                    className: CSS_REFERENCES.TABLE.PROGRESS_BAR,
                }}
            />

            <FlexBox className={CSS_REFERENCES.TABLE.BUTTONS.WRAPPER} sx={{ gap: "4px" }}>
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
        </FlexBox>
    );
};

export default SingleLabel;
