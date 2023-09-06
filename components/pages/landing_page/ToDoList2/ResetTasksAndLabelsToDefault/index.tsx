// Tools
import { useRef } from "react";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useLabelsVaryFromDefault, useTasksVaryFromDefault } from "./hooks";
import { useTasksListContext, useLabelsContext, useLabelsUpdatersContext } from "../hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import ModalOpeningButton from "./ModalOpeningButton";
import ResetAffirmationModal from "./ResetAffirmationModal";

const ResetTasksAndLabelsToDefault: FunctionComponent = () => {
    const { displaySnackbar } = useSnackbar();

    const resetTasksButtonRef = useRef<HTMLButtonElement>(null);

    const { labels } = useLabelsContext();
    const { resetToDefault: resetLabels } = useLabelsUpdatersContext();
    const { resetToDefault: resetTasks, tasks } = useTasksListContext();

    const tasksVaryFromDefault: boolean = useTasksVaryFromDefault(tasks);
    const labelsVaryFromDefault: boolean = useLabelsVaryFromDefault(labels);

    const resetIsPossible: boolean = tasksVaryFromDefault || labelsVaryFromDefault;

    function handleReset() {
        try {
            // If there is nothing to reset, do nothing
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
        <>
            <ModalOpeningButton
                ref={resetTasksButtonRef} //
                disabled={resetIsPossible === false}
            />

            <ResetAffirmationModal
                ref={resetTasksButtonRef} //
                performReset={handleReset}
            />
        </>
    );
};

export default ResetTasksAndLabelsToDefault;
