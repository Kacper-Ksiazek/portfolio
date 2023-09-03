// Tools
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
// Other components
import Label from "./Label";
import Title from "./TaskTitle";
import Description from "./TaskDescription";
import LabelsWrapper from "./LabelsWrapper";
import InformationWithIcon from "./InformationWithIcon";
import ActualCompletionButton from "../../CompletionButton/ActualCompletionButton";
// Material UI Icons
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

interface SingleTaskViewModeProps {
    data: Task;
    applyMobileLayout: boolean;
}

const SingleTaskViewMode: FunctionComponent<SingleTaskViewModeProps> = (props) => {
    const { data } = props;

    const indicateUrgency: boolean = data.urgent;

    return (
        <>
            <Title title={props.data.title}>
                {props.applyMobileLayout ? <ActualCompletionButton /> : <></>}
                {/*  */}
            </Title>

            <LabelsWrapper indicateUrgency={indicateUrgency}>
                <Label indicateUrgency={indicateUrgency} />
                <Label labelID={data.labelID} isTaskUrgent={indicateUrgency} />
            </LabelsWrapper>

            <InformationWithIcon
                icon={<CalendarMonthRoundedIcon />} //
                info={data.dueDate}
            />

            <InformationWithIcon
                icon={<AccessTimeRoundedIcon />} //
                info={data.dueTime}
            />

            <InformationWithIcon
                icon={<PlaceIcon />} //
                info={data.localization}
            />

            <Description description={data.description} />
        </>
    );
};

export default SingleTaskViewMode;
