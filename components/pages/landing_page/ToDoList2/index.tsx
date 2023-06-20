// Tools
import { useMemo } from "react";
import { useFilteredTasks, useTasksListContext } from "./hooks";
import { LabelsContextProvider, TaskListContextProvider } from "./context";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Other components
import SingleTask from "./SingleTask";
// Styled Components
import Filters from "./Filters";
import TasksWrapper from "./TasksWrapper";
import ActionsHeader from "./ActionsHeader";
import ContentWrapper from "./ContentWrapper";
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

const ToDoList: FunctionComponent = () => {
    const { tasks, edit, remove } = useTasksListContext();
    const { fadeContentOut, filteredTasks, filters, updateFilters } = useFilteredTasks(tasks);

    const disableFilteringByCompletion = useMemo<boolean>(() => {
        if (filters.completion !== "_ALL") return false;
        if (filteredTasks.length < 2) return true;

        const first = filteredTasks[0].isCompleted;

        for (const el of filteredTasks) {
            if (el.isCompleted !== first) return false;
        }

        return true;
    }, [filteredTasks, filters.completion]);

    const amountOfFilteredTasks: number = filteredTasks.length;

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
                <ActionsHeader />

                <Filters
                    filters={filters} //
                    amountOfTasks={amountOfFilteredTasks}
                    updateFilters={updateFilters}
                    disableFilteringByCompletion={disableFilteringByCompletion}
                    disableSortingTools={filteredTasks.length <= 1 || fadeContentOut}
                />

                <TasksWrapper
                    amountOfTasks={amountOfFilteredTasks} //
                    fadeContentOut={fadeContentOut}
                    progress={((filteredTasks.filter((el) => el.isCompleted).length * 100) / filteredTasks.length).toFixed(2)}
                >
                    {filteredTasks.map((item, index) => {
                        return (
                            <SingleTask
                                key={item.id} //
                                data={item}
                                update={(val) => edit(item.id, val)}
                                remove={() => remove(item.id)}
                            />
                        );
                    })}
                </TasksWrapper>
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
