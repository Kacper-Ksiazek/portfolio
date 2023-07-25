// Tools
import { useFilteredTasks, useTasksListContext } from "./hooks";
import { LabelsContextProvider, TaskListContextProvider } from "./context";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Other components
import Filters from "./Filters";
import ActionsHeader from "./ActionsHeader";
// Styled Components
import ContentWrapper from "./ContentWrapper";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";
import TasksList from "./TasksList";

const ToDoList: FunctionComponent = () => {
    const { tasks } = useTasksListContext();
    const { fadeContentOut, filteredTasks, filters, updateFilters } = useFilteredTasks(tasks);

    return (
        <DarkSectionWrapper
            shapesDirection="left"
            header={{
                main: "React to do list",
                index: 1,
                icon: <Code />,
                description: `To do list project is undoubtedly a *part and parcel* of everyone's frontend developer portfolio, because this at the first glance unassuming piece of software is actually a *very accurate and reliable gauge of somebody's competencies*.`,
            }}
            githubURL={"https://github.com/Kacper-Ksiazek/portfolio/tree/main/components/pages/landing_page"}
        >
            <ContentWrapper>
                {/* <ActionsHeader />

                <Filters
                    filteredTasks={filteredTasks} //
                    fadeContentOut={fadeContentOut}
                    filters={filters}
                    updateFilters={updateFilters}
                /> */}

                <TasksList
                    fadeContentOut={fadeContentOut} //
                    filteredTasks={filteredTasks}
                />
            </ContentWrapper>
        </DarkSectionWrapper>
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
