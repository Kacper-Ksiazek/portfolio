// Tools
import { useSingleTasksActions } from "./hooks/useSingleTasksActions";
// Types
import type { FunctionComponent } from "react";
import type { LabelFilter, Task } from "landing_page/ToDoList2/@types";
// Other components
import SingleTask from "./SingleTask";
import TasksWrapper from "./TasksWrapper";

interface TasksListProps {
    filteredTasks: Task[];
    labelFilter: LabelFilter;
    fadeContentOut: boolean;
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
