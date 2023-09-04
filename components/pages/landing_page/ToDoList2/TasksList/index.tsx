// Tools
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { FunctionComponent } from "react";
import type { LabelFilter, Task, TaskEditCallback } from "landing_page/ToDoList2/@types";
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

    const taskListContext = useTasksListContext();

    function deleteTaskWithID(id: Task["id"]): () => void {
        return () => taskListContext.remove(id);
    }

    function editTaskWithID(id: Task["id"]): (cb: TaskEditCallback) => void {
        return (cb) => taskListContext.edit(id, cb);
    }

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
