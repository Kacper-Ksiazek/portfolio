// Tools
import { useState, useRef } from "react";
import { toDoListIntroAnimations } from "./introAnimations";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import AddNewTask from "./AddNewTask";
import SingleTask from "./SingleTask";
// Styled Components
import NoResults from "./NoResults";
import DarkSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Dark";
import OverflowScrollDiv from "@/components/_styled_components/content_placement/OverflowScrollDiv";

const ToDoList: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const [tasks, setTasks] = useState<string[]>(["Go and help mum with laundry", "Mow the lawn for my grandparents", "Show everyone around how to make exquisite software"]);
    const [freshlyCreatedTaskIndex, setFreshlyCreatedTaskIndex] = useState<number>(-1);

    const taskWrapperElement = useRef<HTMLDivElement | null>(null);
    const inputElement = useRef<HTMLInputElement | null>(null);

    const deleteSingleTask = (indexToDelete: number) => {
        setTasks((val) => val.filter((_el, index) => index !== indexToDelete));
    };

    const modifySingleTask = (indexToModify: number, value: string) => {
        setTasks((val) => val.map((el, index) => (index === indexToModify ? value : el)));
    };

    const addNewTask = (newTask: string) => {
        setFreshlyCreatedTaskIndex(tasks.length);
        tasks.push(newTask);

        inputElement.current?.focus();
        setTimeout(() => {
            if (taskWrapperElement.current) {
                taskWrapperElement.current.scrollTo({
                    top: (taskWrapperElement.current.firstChild as any).offsetHeight ?? 100,
                    behavior: "smooth",
                });
            }
        }, 20);

        setTimeout(() => {
            setFreshlyCreatedTaskIndex(-1);
        }, 1000);
    };

    return (
        <DarkSectionWrapper
            shapesDirection="left"
            header={{
                main: "React to do list",
                label: "Simply because there cannot be a junior developer portfolio without one",
            }}
            sx={{
                "&.visible": toDoListIntroAnimations as any,
            }}
        >
            {(() => {
                if (tasks.length) {
                    return (
                        <OverflowScrollDiv
                            maxHeight="150px" //
                            ref={taskWrapperElement as any}
                            sx={{ maxWidth: "800px", margin: "0 auto" }}
                        >
                            {tasks.map((item, index) => {
                                return (
                                    <SingleTask
                                        key={`${index}-${item}`} //
                                        index={index}
                                        task={item}
                                        deleteThisTask={() => deleteSingleTask(index)}
                                        modifyThisTask={(value: string) => modifySingleTask(index, value)}
                                        freshlyCreated={index === freshlyCreatedTaskIndex}
                                    />
                                );
                            })}
                            <AddNewTask
                                ref={inputElement} //
                                saveNewTask={addNewTask}
                            />
                        </OverflowScrollDiv>
                    );
                } else {
                    return <NoResults />;
                }
            })()}
        </DarkSectionWrapper>
    );
};

export default ToDoList;
