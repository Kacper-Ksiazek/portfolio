// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import EnsureThereAreRecords from "./EnsureThereAreRecords";
import WrapWithOverScrollDiv from "./WrapWithOverScrollDiv";

interface TasksWrapperProps {
    children: ReactNode;
    amountOfTasks: number;
    fadeContentOut: boolean;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    return (
        <EnsureThereAreRecords amountOfTasks={props.amountOfTasks}>
            <WrapWithOverScrollDiv
                amountOfTasks={props.amountOfTasks} //
            >
                {props.children}
            </WrapWithOverScrollDiv>
        </EnsureThereAreRecords>
    );
};

export default TasksWrapper;
