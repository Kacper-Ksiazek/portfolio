// Tools
import { CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
// Other components
import Label from "./Label";
import InformationWithIcon from "./InformationWithIcon";
// Material UI Icons
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
// Styled components
import TaskDescription from "./TaskDescription";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface SingleTaskViewModeProps {
    data: Task;
}

const SingleTaskViewMode: FunctionComponent<SingleTaskViewModeProps> = (props) => {
    const { data } = props;

    return (
        <>
            <div style={{ width: "100%", display: "flex" }}>
                <TaskDescription className={CSS_REFERENCES.DESCRIPTION + " " + CSS_REFERENCES.ANIMATION_ELEMENT}>{props.data.description}</TaskDescription>
            </div>

            <FlexBox className={CSS_REFERENCES.LABELS_WRAPPER}>
                <Label indicateUrgency={data.urgent} />
                <Label labelID={data.labelID} isTaskUrgent={data.urgent} />
            </FlexBox>

            {data.dueDate && (
                <InformationWithIcon icon={<CalendarMonthRoundedIcon />}>
                    Due to: <strong>{data.dueDate}</strong>
                </InformationWithIcon>
            )}
        </>
    );
};

export default SingleTaskViewMode;
