// Tools
import { CSS_REFERENCES as _CSS_REFERENCES } from "../../css_references";
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

const CSS_REFERENCES = _CSS_REFERENCES.VIEW_MODE;

const SingleTaskViewMode: FunctionComponent<SingleTaskViewModeProps> = (props) => {
    const { data } = props;

    return (
        <>
            <TaskDescription description={props.data.description} />

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
