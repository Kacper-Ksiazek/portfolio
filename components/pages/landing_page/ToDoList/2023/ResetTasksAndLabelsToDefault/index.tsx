// Tools
import { useSnackbar } from "@/hooks/useSnackbar";
import { allignViewport } from "./utils/alignViewport";
import { useLabelsVaryFromDefault, useTasksVaryFromDefault } from "./hooks";
import { useTasksListContext, useLabelsContext, useLabelsUpdatersContext } from "../hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import ResetButton from "landing_page/ToDoList/Layout/_ResetButton";

const ResetTasksAndLabelsToDefault: FunctionComponent = () => {
    const { displaySnackbar } = useSnackbar();

    const { labels } = useLabelsContext();
    const { resetToDefault: resetLabels } = useLabelsUpdatersContext();
    const { resetToDefault: resetTasks, tasks, tasksWrapperRef } = useTasksListContext();

    const tasksVaryFromDefault: boolean = useTasksVaryFromDefault(tasks);
    const labelsVaryFromDefault: boolean = useLabelsVaryFromDefault(labels);

    const resetIsPossible: boolean = tasksVaryFromDefault || labelsVaryFromDefault;

    function handleReset() {
        try {
            allignViewport(tasksWrapperRef as any);
            //  If there is nothing to reset, do nothing
            if (resetIsPossible) {
                resetTasks();
                resetLabels();

                displaySnackbar({
                    msg: "Tasks and labels have been reset to default",
                    severity: "success",
                });
            }
            // Here: resetIsPossible === false
        } catch (error) {
            displaySnackbar({
                msg: "Something went wrong while resetting tasks and labels to default",
                severity: "error",
            });
        }
    }

    return (
        <ResetButton
            disabled={resetIsPossible === false} //
            handleReset={handleReset}
        />
    );
};

export default ResetTasksAndLabelsToDefault;
