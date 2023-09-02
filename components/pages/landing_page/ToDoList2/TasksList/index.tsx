// Tools
import { useTasksListContext } from "landing_page/ToDoList2/hooks/useTaskListContext";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
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

    const { edit: editTaskWithID, remove: deleteTaskWithID, tasksWrapperRef } = useTasksListContext();

    const progress: string = ((filteredTasks.filter((el) => el.isCompleted).length * 100) / filteredTasks.length).toFixed(2);

    return (
        <TaskListBase fadeContentOut={props.fadeContentOut} ref={tasksWrapperRef}>
            <TasksWrapper
                amountOfTasks={filteredTasks.length} //
                fadeContentOut={props.fadeContentOut}
                progress={progress}
            >
                {filteredTasks.map((item, index) => {
                    return (
                        <SingleTask
                            key={item.id} //
                            data={item}
                            remove={() => deleteTaskWithID(item.id)}
                            update={(val) => editTaskWithID(item.id, val)}
                        />
                    );
                })}
            </TasksWrapper>
        </TaskListBase>
    );
};

export default TasksList;
