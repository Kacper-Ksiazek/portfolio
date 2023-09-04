// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import AssignmentRounded from "@mui/icons-material/AssignmentRounded";
// Styled components
import NoRecordWrapper from "./Base";
import IconWrapper from "./IconWrapper";

interface EnsureThereAreRecordsProps {
    children: ReactNode;
    amountOfTasks: number;
}

const EnsureThereAreRecords: FunctionComponent<EnsureThereAreRecordsProps> = (props) => {
    if (props.amountOfTasks === 0) {
        return (
            <NoRecordWrapper>
                <IconWrapper>
                    <AssignmentRounded />
                </IconWrapper>

                <h2>No tasks</h2>
                <p>There are no tasks matching given filters</p>
            </NoRecordWrapper>
        );
    }

    return <>{props.children}</>;
};

export default EnsureThereAreRecords;
