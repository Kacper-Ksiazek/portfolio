// Tools
import { useArray } from "@/hooks/useArray";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useState, useRef, useMemo } from "react";
import { repeat } from "@/utils/client/styled/repeat";
import { scaleToLeft } from "@/components/keyframes/outro";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { fadeSimple, scaleFromRight } from "@/components/keyframes/intro";
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
    const { displaySnackbar } = useSnackbar();

    const tasksArray = useArray<string>(DEFAULT_TASKS);
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

    function resetTasksList() {
        tasksArray.clear();

        for (const task of DEFAULT_TASKS) {
            tasksArray.push(task);
        }
    }

    const disableResetButton: boolean = useMemo<boolean>(() => {
        if (tasksArray.entries.length !== DEFAULT_TASKS.length) return false;

        for (const [index, task] of tasksArray.entries.entries()) {
            if (task !== DEFAULT_TASKS[index]) return false;
        }

        return true;
    }, [tasksArray.entries]);

    return (
        <TransformWhenVisible
            sx={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }} //
            to={(theme): Styles => ({
                ".single-task-wrapper": {
                    width: "100%",
                    position: "relative",
                    "&:not(&:nth-of-type(1))": {
                        marginTop: "10px",
                    },
                    "&::after": {
                        content: "''",
                        position: "absolute",
                        ...theme.mixins.absolute_full,
                        background: theme.palette.background.lightAnimationBar,
                    },
                    ...repeat(4, (index) => {
                        const diff = index * 0.1;
                        return {
                            ".single-task": {
                                animation: `${fadeSimple} .001s ${0.8 + diff}s both !important`,
                            },
                            "&::after": {
                                animation: chainAnimations([
                                    [scaleFromRight, 0.3, 0.5 + diff],
                                    [scaleToLeft, 0.3, 0.5],
                                ]),
                            },
                        };
                    }),
                },
                "#add-new-task-wrapper": {
                    animation: `${fadeSimple} .3s 1s both linear`,
                },
            })}
        >
            {(() => {
                if (tasksArray.entries.length) {
                    return (
                        <>
                            <OverflowScrollDiv
                                maxHeight="192px" //
                                ref={taskWrapperElement as any}
                                sx={{ maxWidth: "800px", margin: "0 auto" }}
                            >
                                {tasksArray.entries.map((item, index) => {
                                    return (
                                        <div className="single-task-wrapper" key={`${index}-${item}`}>
                                            <SingleTask
                                                index={index}
                                                task={item}
                                                showIntroAnimation={showIntroAnimation}
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
                ref={inputElement} //
                saveNewTask={addNewTask}
            />

            <ResetButton disabled={disableResetButton} onClick={resetTasksList} />
        </TransformWhenVisible>
    );
};

export default ToDoList;
