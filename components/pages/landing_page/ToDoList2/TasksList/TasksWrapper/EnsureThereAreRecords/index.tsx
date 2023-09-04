// Types
import type { FunctionComponent, ReactNode } from "react";
import type { LabelFilter } from "landing_page/ToDoList2/@types";
// Material UI Icons
import AssignmentRounded from "@mui/icons-material/AssignmentRounded";
// Other components
import DistinguishSelectedLabel from "./DistinguishSelectedLabel";
// Styled components
import NoRecordWrapper from "./Base";
import IconWrapper from "./IconWrapper";

interface EnsureThereAreRecordsProps {
    children: ReactNode;
    amountOfTasks: number;
    labelFilter: LabelFilter;
}

const EnsureThereAreRecords: FunctionComponent<EnsureThereAreRecordsProps> = (props) => {
    const thereAreNoTasksAtAll = props.labelFilter === "_ALL" && props.amountOfTasks === 0;

    if (props.amountOfTasks === 0) {
        return (
            <NoRecordWrapper>
                <IconWrapper>
                    <AssignmentRounded />
                </IconWrapper>
                <h2>No tasks</h2>
                <p>There are no tasks {thereAreNoTasksAtAll ? <strong>at all</strong> : "matching given filters"}</p>

                {props.labelFilter !== "_ALL" && <DistinguishSelectedLabel labelFilter={props.labelFilter} />}
            </NoRecordWrapper>
        );
    }

    return <>{props.children}</>;
};

export default EnsureThereAreRecords;
