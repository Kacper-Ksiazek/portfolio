// Tools
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { FunctionComponent } from "react";
import type { Task, TaskEditCallback } from "landing_page/ToDoList2/@types";
// Other components
import SingleTask from "./SingleTask";
import TasksWrapper from "./TasksWrapper";
// Styled components
import TaskListBase from "./Base";

interface TasksListProps {
    filteredTasks: Task[];
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
        <TaskListBase
            fadeContentOut={props.fadeContentOut} //
            ref={taskListContext.tasksWrapperRef}
        >
            <TasksWrapper
                amountOfTasks={filteredTasks.length} //
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
        </TaskListBase>
    );
};

export default TasksList;
