// Tools
import { useState, useRef } from "react";
import { useArray } from "@/hooks/useArray";
import { useSnackbar } from "@/hooks/useSnackbar";
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
    const { displaySnackbar } = useSnackbar();

    const tasksArray = useArray<string>(["Go and help mum with laundry", "Mow the lawn for my grandparents", "Show everyone around how to make exquisite software"]);
    const [freshlyCreatedTaskIndex, setFreshlyCreatedTaskIndex] = useState<number>(-1);
    const [showIntroAnimation, setShowIntroAnimation] = useState<boolean>(true);
    const taskWrapperElement = useRef<HTMLDivElement | null>(null);
    const inputElement = useRef<HTMLInputElement | null>(null);

    const deleteSingleTask = (indexToDelete: number) => {
        try {
            tasksArray.remove({ index: indexToDelete });

            displaySnackbar({
                msg: "A task has been deleted successfully",
                severity: "success",
                hideAfter: 5000,
            });
        } catch (e) {
            displaySnackbar({
                msg: "Something went wrong while deleting the task",
                severity: "error",
                hideAfter: 5000,
            });
        }
    };

    const modifySingleTask = (indexToModify: number, value: string) => {
        try {
            tasksArray.update({ index: indexToModify, data: value });

            displaySnackbar({
                msg: "A task has been updated successfully",
                severity: "success",
                hideAfter: 5000,
            });
        } catch (e) {
            displaySnackbar({
                msg: "Something went wrong while updating the task",
                severity: "error",
                hideAfter: 5000,
            });
        }
    };

    const addNewTask = (newTask: string) => {
        try {
            setFreshlyCreatedTaskIndex(tasksArray.entries.length);
            tasksArray.push(newTask);

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

            displaySnackbar({
                msg: "New task has been added successfully",
                severity: "success",
                hideAfter: 5000,
            });
        } catch (e) {
            displaySnackbar({
                msg: "Something went wrong while adding the new task",
                severity: "error",
                hideAfter: 5000,
            });
        }
    };

    const onVisible = () => {
        setTimeout(() => {
            setShowIntroAnimation(false);
        }, 3000);
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
            onVisible={onVisible}
        >
            {(() => {
                if (tasksArray.entries.length) {
                    return (
                        <>
                            <OverflowScrollDiv
                                maxHeight="150px" //
                                ref={taskWrapperElement as any}
                                sx={{ maxWidth: "800px", margin: "0 auto" }}
                            >
                                {tasksArray.entries.map((item, index) => {
                                    return (
                                        <SingleTask
                                            key={`${index}-${item}`} //
                                            index={index}
                                            task={item}
                                            showIntroAnimation={showIntroAnimation}
                                            deleteThisTask={() => deleteSingleTask(index)}
                                            modifyThisTask={(value: string) => modifySingleTask(index, value)}
                                            freshlyCreated={index === freshlyCreatedTaskIndex}
                                        />
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
                ref={inputElement} //
                saveNewTask={addNewTask}
            />
        </DarkSectionWrapper>
    );
};

export default ToDoList;
