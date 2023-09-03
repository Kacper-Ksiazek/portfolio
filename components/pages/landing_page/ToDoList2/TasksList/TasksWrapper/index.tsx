// Tools
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import TasksWrapperBase from "./Base";
import EnsureThereAreRecords from "./EnsureThereAreRecords";
import WrapWithOverScrollDiv from "./WrapWithOverScrollDiv";

interface TasksWrapperProps {
    children: ReactNode;
    amountOfTasks: number;
    fadeContentOut: boolean;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    const taskListContext = useTasksListContext();

    return (
        <TasksWrapperBase
            fadeContentOut={props.fadeContentOut} //
            ref={taskListContext.tasksWrapperRef}
        >
            <EnsureThereAreRecords amountOfTasks={props.amountOfTasks}>
                <WrapWithOverScrollDiv
                    amountOfTasks={props.amountOfTasks} //
                >
                    {props.children}
                </WrapWithOverScrollDiv>
            </EnsureThereAreRecords>
        </TasksWrapperBase>
    );
};

export default TasksWrapper;
