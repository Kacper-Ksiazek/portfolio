// Tools
import { useMemo } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useTaskListContext } from "./hooks/useTaskListContext";
import { LabelsContextProvider, TaskListContextProvider } from "./context";
// Types
import type { FunctionComponent } from "react";
import type { Filters as I_Filters } from "./@types";
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

    const [filters, updateFilters] = useSimpleReducer<I_Filters>({
        sort: "NEWEST",
        urgencyFilter: "_DEFAULT",
        completedOnly: false,
        withParticularLabel: "_ALL",
    });
    const tasksToBeShown = useMemo<typeof tasks>(() => {
        let result: typeof tasks = tasks;
        const { withParticularLabel, completedOnly, urgencyFilter } = filters;

        result = result.filter((target) => {
            // Apply particular label filter
            if (withParticularLabel !== "_ALL" && withParticularLabel !== target.label) return false;
            // Check completed only
            if (completedOnly && target.isCompleted === false) return false;
            // Check whether it is urgent only
            if (urgencyFilter === "URGENT_ONLY" && target.urgent === false) return false;

            return true;
        });

        return result;
    }, [tasks, filters]);
    // const;

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

            <TasksWrapper amountOfTasks={tasksToBeShown.length}>
                {tasksToBeShown.map((item, index) => {
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
