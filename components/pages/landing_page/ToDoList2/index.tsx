// Tools
import { useFilteredTasks, useTaskListContext } from "./hooks";
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
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";

const ToDoList: FunctionComponent = () => {
    const { tasks, edit, remove } = useTaskListContext();
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
            <Filters filters={filters} updateFilters={updateFilters} />

            <TasksWrapper amountOfTasks={filteredTasks.length} fadeContentOut={fadeContentOut}>
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
