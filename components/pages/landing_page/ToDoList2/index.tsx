// Tools
import { useTaskListContext } from "./hooks/useTaskListContext";
import { LabelsContextProvider, TaskListContextProvider } from "./context";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Code from "@mui/icons-material/Code";
// Other components
import SingleTask from "./SingleTask";
// Styled Components
import DarkSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Dark";
import { Task } from "./@types";

interface ToDoListProps {
    //
}

const ToDoList: FunctionComponent<ToDoListProps> = (props) => {
    const { tasks, edit } = useTaskListContext();

    function markAsComplete(id: Task["id"]) {
        edit(id, {
            isCompleted: true,
        });
    }

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
            <div className="filters">
                <h1>filters gonna be here</h1>
            </div>

            <section className="tasks-wrapper">
                {tasks.map((item, index) => {
                    return (
                        <SingleTask
                            key={item.id} //
                            data={item}
                            markAsComplete={() => markAsComplete(item.id)}
                        />
                    );
                })}
            </section>
        </DarkSectionWrapper>
    );
};

const ToDoListWithContexts: FunctionComponent = (props) => {
    return (
        <LabelsContextProvider>
            <TaskListContextProvider>
                <ToDoList />
            </TaskListContextProvider>
        </LabelsContextProvider>
    );
};

export default ToDoListWithContexts;
