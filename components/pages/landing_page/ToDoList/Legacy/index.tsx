// Tools
import { useTasks } from "./hooks/useTasks";
import { useState, useRef, useMemo } from "react";
import { stylesWhenVisible } from "./styles_when_visible";
// Types
import type { Styles } from "@/@types/MUI";
import type { FunctionComponent } from "react";
// Other components
import AddNewTask from "./AddNewTask";
import SingleTask from "./SingleTask";
import ResetButton from "landing_page/ToDoList/Layout/_ResetButton";
// Other components
import TransformWhenVisible from "@/components/utils/TransformWhenVisible";
// Styled Components
import NoResults from "./NoResults";
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

const DEFAULT_TASKS: string[] = ["Go and help mum with laundry", "Mow the lawn for my grandparents", "Show everyone around how to make exquisite software"];

const ToDoList: FunctionComponent = () => {
    const [freshlyCreatedTaskIndex, setFreshlyCreatedTaskIndex] = useState<number>(-1);
    const tasksWrapperRef = useRef<HTMLDivElement | null>(null);
    const addTaskInputRef = useRef<HTMLInputElement | null>(null);

    const { tasks, addTask, deleteSingleTask, modifySingleTask, resetTasksList } = useTasks({ addTaskInputRef, tasksWrapperRef, setFreshlyCreatedTaskIndex });

    const disableResetButton: boolean = useMemo<boolean>(() => {
        if (tasks.length !== DEFAULT_TASKS.length) return false;

        for (const [index, task] of tasks.entries()) {
            if (task !== DEFAULT_TASKS[index]) return false;
        }

        return true;
    }, [tasks]);

    return (
        <TransformWhenVisible
            sx={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }} //
            to={(theme): Styles => stylesWhenVisible(theme)}
        >
            {(() => {
                if (tasks.length) {
                    return (
                        <>
                            <OverflowScrollDiv
                                maxHeight="192px" //
                                ref={tasksWrapperRef as any}
                                sx={{ maxWidth: "800px", margin: "0 auto" }}
                            >
                                {tasks.map((item, index) => {
                                    return (
                                        <div className="single-task-wrapper" key={`${index}-${item}`}>
                                            <SingleTask
                                                index={index}
                                                task={item}
                                                deleteThisTask={() => deleteSingleTask(index)}
                                                modifyThisTask={(value: string) => modifySingleTask(index, value)}
                                                freshlyCreated={index === freshlyCreatedTaskIndex}
                                            />
                                        </div>
                                    );
                                })}
                            </OverflowScrollDiv>
                        </>
                    );
                } else {
                    return <NoResults />;
                }
            })()}

            <AddNewTask
                ref={addTaskInputRef} //
                saveNewTask={addTask}
            />

            <ResetButton disabled={disableResetButton} onClick={resetTasksList} />
        </TransformWhenVisible>
    );
};

export default ToDoList;
