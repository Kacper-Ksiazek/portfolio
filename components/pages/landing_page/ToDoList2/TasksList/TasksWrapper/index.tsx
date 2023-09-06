// Tools
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { SpecificLabelOnlyFilter } from "landing_page/ToDoList2/@types/Filters";
// Other components
import TasksWrapperBase from "./Base";
import EnsureThereAreRecords from "./EnsureThereAreRecords";
import WrapWithOverScrollDiv from "./WrapWithOverScrollDiv";

interface TasksWrapperProps {
    children: ReactNode;
    amountOfTasks: number;
    fadeContentOut: boolean;
    labelFilter: SpecificLabelOnlyFilter;
}

const TasksWrapper: FunctionComponent<TasksWrapperProps> = (props) => {
    const taskListContext = useTasksListContext();

    return (
        <TasksWrapperBase
            fadeContentOut={props.fadeContentOut} //
            ref={taskListContext.tasksWrapperRef}
        >
            <EnsureThereAreRecords
                amountOfTasks={props.amountOfTasks} //
                labelFilter={props.labelFilter}
            >
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
