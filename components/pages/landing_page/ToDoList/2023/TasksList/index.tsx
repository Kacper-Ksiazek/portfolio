// Tools
import { useState } from "react";
import { stylesWhenVisible } from "./styles_when_visible";
import { useSingleTasksActions } from "./hooks/useSingleTasksActions";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList/2023/@types/Tasks";
import type { SpecificLabelOnlyFilter } from "landing_page/ToDoList/2023/@types/Filters";
// Other components
import SingleTask from "./SingleTask";
import TasksWrapper from "./TasksWrapper";
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";

interface TasksListProps {
    filteredTasks: Task[];
    fadeContentOut: boolean;
    labelFilter: SpecificLabelOnlyFilter;
}

const INTRO_ANIMATIONS_TOTAL_DURATION: number = 2750;

const TasksList: FunctionComponent<TasksListProps> = (props) => {
    const { filteredTasks } = props;
    const { deleteTaskWithID, editTaskWithID } = useSingleTasksActions();

    const [introAnimationsHaveEnded, setIntroAnimationsHaveEnded] = useState<boolean>(false);

    function onVisible() {
        setTimeout(() => {
            setIntroAnimationsHaveEnded(true);
        }, INTRO_ANIMATIONS_TOTAL_DURATION);
    }

    return (
        <TransformWhenVisible onVisible={onVisible} to={stylesWhenVisible}>
            <TasksWrapper
                amountOfTasks={filteredTasks.length} //
                labelFilter={props.labelFilter}
                fadeContentOut={props.fadeContentOut}
            >
                {filteredTasks.map((task, index) => {
                    const { id } = task;
                    return (
                        <SingleTask
                            key={id} //
                            data={task}
                            introAnimationsHaveEnded={index >= 4 || introAnimationsHaveEnded}
                            remove={deleteTaskWithID(id)}
                            update={editTaskWithID(id)}
                        />
                    );
                })}
            </TasksWrapper>
        </TransformWhenVisible>
    );
};

export default TasksList;
