// Tools
import { useArray } from "@/hooks/useArray";
import { useSnackbar } from "@/hooks/useSnackbar";
// Types
import type { Dispatch, SetStateAction, MutableRefObject } from "react";

const DEFAULT_TASKS: string[] = ["Go and help mum with laundry", "Mow the lawn for my grandparents", "Show everyone around how to make exquisite software"];

interface UseTasksParams {
    tasksWrapperRef: MutableRefObject<HTMLDivElement | null>;
    addTaskInputRef: MutableRefObject<HTMLInputElement | null>;

    setFreshlyCreatedTaskIndex: Dispatch<SetStateAction<number>>;
}

interface UseTasksResult {
    tasks: string[];

    resetTasksList: () => void;
    addTask: (task: string) => void;
    deleteSingleTask: (indexToDelete: number) => void;
    modifySingleTask: (indexToModify: number, newTask: string) => void;
}

export function useTasks(params: UseTasksParams): UseTasksResult {
    const { setFreshlyCreatedTaskIndex, tasksWrapperRef, addTaskInputRef } = params;

    const { displaySnackbar } = useSnackbar();
    const tasksArray = useArray<string>(DEFAULT_TASKS);

    function deleteSingleTask(indexToDelete: number) {
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
    }

    function modifySingleTask(indexToModify: number, value: string) {
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
    }

    function addTask(newTask: string) {
        try {
            setFreshlyCreatedTaskIndex(tasksArray.entries.length);
            tasksArray.push(newTask);

            addTaskInputRef.current?.focus();
            setTimeout(() => {
                if (tasksWrapperRef.current) {
                    tasksWrapperRef.current.scrollTo({
                        top: (tasksWrapperRef.current.firstChild as any).offsetHeight ?? 100,
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
    }

    function resetTasksList() {
        try {
            tasksArray.clear();
            for (const task of DEFAULT_TASKS) {
                tasksArray.push(task);
            }
            displaySnackbar({
                msg: "Tasks list has been reset successfully",
                severity: "success",
            });
        } catch (e) {
            displaySnackbar({
                msg: "Something went wrong while resetting the tasks list",
                severity: "error",
            });
        }
    }

    return {
        tasks: tasksArray.entries, //
        addTask,
        resetTasksList,
        deleteSingleTask,
        modifySingleTask,
    };
}
