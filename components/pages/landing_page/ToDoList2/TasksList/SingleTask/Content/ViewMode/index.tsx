// Tools
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
// Other components
import Label from "./Label";
import LabelsWrapper from "./LabelsWrapper";
import InformationWithIcon from "./InformationWithIcon";
// Material UI Icons
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
// Styled components
import TaskDescription from "./TaskDescription";

interface SingleTaskViewModeProps {
    data: Task;
}

const SingleTaskViewMode: FunctionComponent<SingleTaskViewModeProps> = (props) => {
    const { data } = props;

    return (
        <>
            <TaskDescription description={props.data.description} />

            <LabelsWrapper>
                <Label indicateUrgency={data.urgent} />
                <Label labelID={data.labelID} isTaskUrgent={data.urgent} />
            </LabelsWrapper>

            {data.dueDate && (
                <InformationWithIcon icon={<CalendarMonthRoundedIcon />}>
                    Due to: <strong>{data.dueDate}</strong>
                </InformationWithIcon>
            )}
        </>
    );
};

export default SingleTaskViewMode;
