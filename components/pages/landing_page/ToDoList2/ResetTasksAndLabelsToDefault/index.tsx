// Tools
import { useRef } from "react";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useLabelsVaryFromDefault, useTasksVaryFromDefault } from "./hooks";
import { useTasksListContext, useLabelsContext, useLabelsUpdatersContext } from "../hooks";
// Types
import type { FunctionComponent } from "react";
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import RestartAltRounded from "@mui/icons-material/RestartAltRounded";
// Other components
import ConfirmationModal from "@/components/atoms/ConfirmationModal";

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
            <StyledButton
                componentThemeID="PRIMARY" //
                ref={resetTasksButtonRef}
                disabled={resetIsPossible === false}
                sx={{
                    height: "42px", //
                    alignSelf: "center",
                    marginTop: "64px",
                    padding: "0 48px",
                    "@media (max-width:620px)": {
                        width: "100vw",
                    },
                }}
            >
                <RestartAltRounded />
                <span>Reset tasks and labels</span>
            </StyledButton>

            <ConfirmationModal
                title="Affirmation required"
                ref={resetTasksButtonRef}
                actionButton={{
                    disabled: false,
                    onClick: handleReset,
                    prompt: "Reset",
                }}
            >
                <p>Are you sure you want to reset tasks and labels to their default values?</p>
                <strong>This action is irreversible</strong>
            </ConfirmationModal>
        </>
    );
};

export default ResetTasksAndLabelsToDefault;
