// Tools
import { useRef } from "react";
import { useFilteredTasks, useTasksListContext } from "./hooks";
import { LabelsContextProvider, TaskListContextProvider } from "./context";
// Types
import type { FunctionComponent } from "react";
// Other components
import Filters from "./Filters";
import TasksList from "./TasksList";
import ActionsHeader from "./ActionsHeader";
import ResetTasksAndLabelsToDefault from "./ResetTasksAndLabelsToDefault";
// Styled Components
import ContentWrapper from "./ContentWrapper";

const ToDoList: FunctionComponent = () => {
    const { tasks } = useTasksListContext();
    const { fadeContentOut, filteredTasks, filters, updateFilters } = useFilteredTasks(tasks);

    const contentWrapperRef = useRef<HTMLDivElement>(null);

    return (
        <ContentWrapper ref={contentWrapperRef}>
            <ActionsHeader tasksInTotal={tasks.length} />

            <Filters
                filteredTasks={filteredTasks} //
                fadeContentOut={fadeContentOut}
                filters={filters}
                updateFilters={updateFilters}
            />

            <TasksList
                fadeContentOut={fadeContentOut} //
                filteredTasks={filteredTasks}
                labelFilter={filters.withParticularLabel}
            />

            <ResetTasksAndLabelsToDefault ref={contentWrapperRef} />
        </ContentWrapper>
    );
};

const ToDoListWithContexts: FunctionComponent = () => {
    return (
        <LabelsContextProvider>
            <TaskListContextProvider>
                <ToDoList />
            </TaskListContextProvider>
        </LabelsContextProvider>
    );
};

export default ToDoListWithContexts;
