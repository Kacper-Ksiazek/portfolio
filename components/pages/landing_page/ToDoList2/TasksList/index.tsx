// Tools
import { useSingleTasksActions } from "./hooks/useSingleTasksActions";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types/Tasks";
import type { SpecificLabelOnlyFilter } from "landing_page/ToDoList2/@types/Filters";
// Other components
import SingleTask from "./SingleTask";
import TasksWrapper from "./TasksWrapper";

interface TasksListProps {
    filteredTasks: Task[];
    fadeContentOut: boolean;
    labelFilter: SpecificLabelOnlyFilter;
}

const TasksList: FunctionComponent<TasksListProps> = (props) => {
    const { filteredTasks } = props;

    const { deleteTaskWithID, editTaskWithID } = useSingleTasksActions();

    return (
        <TasksWrapper
            amountOfTasks={filteredTasks.length} //
            labelFilter={props.labelFilter}
            fadeContentOut={props.fadeContentOut}
        >
            {filteredTasks.map((task) => {
                const { id } = task;
                return (
                    <SingleTask
                        key={id} //
                        data={task}
                        remove={deleteTaskWithID(id)}
                        update={editTaskWithID(id)}
                    />
                );
            })}
        </TasksWrapper>
    );
};

export default TasksList;
