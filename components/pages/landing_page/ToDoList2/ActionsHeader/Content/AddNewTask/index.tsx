// Tools
import { useMemo } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext, useTasksListContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { TaskWithoutID } from "landing_page/ToDoList2/@types";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import StyledButton from "@/components/atoms/forms/StyledButton";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { DueDatePicker, LabelPicker, UrgencySwitch } from "landing_page/ToDoList2/atoms/modifiers";

const AddNewTask: FunctionComponent = () => {
    const { labels } = useLabelsContext();
    const tasksListContext = useTasksListContext();

    const [newTaskBody, updateNewTaskBody] = useSimpleReducer<Omit<TaskWithoutID, "createdAt" | "isCompleted">>({
        description: "",
        dueDate: null,
        label: labels[0],
        urgent: false,
    });

    function addTask() {
        if (disableAddButton) return;

        tasksListContext.add({
            ...newTaskBody,
            isCompleted: false,
            createdAt: Date.now(),
        });
    }

    const disableAddButton = useMemo<boolean>(() => {
        const { description, dueDate, label } = newTaskBody;

        if (description.length < 3 || description.length > 64) return true;
        else if (dueDate !== null && typeof dueDate != "number") return true;
        else if (labels.includes(label) === false) return true;

        return false;
    }, [labels, newTaskBody]);

    return (
        <>
            <FlexBox
                sx={{
                    flexWrap: "wrap", //
                    mt: "8px",
                }}
            >
                <StyledInput
                    placeholder="What do you have to do?"
                    sx={{
                        width: "100%", //
                        ".MuiOutlinedInput-root": {
                            height: "42px",
                        },
                        input: { padding: "8px 12px" },
                    }}
                    value={newTaskBody.description}
                    onChange={(e) => updateNewTaskBody({ description: e.target.value })}
                />

                <FlexBox
                    vertical="center"
                    sx={{
                        marginTop: "8px",
                        width: "100%",
                        "&>*": {
                            "&:not(&:nth-of-type(1))": {
                                marginLeft: "8px",
                            },
                        },
                    }}
                >
                    <UrgencySwitch value={newTaskBody.urgent} updateValue={(val) => updateNewTaskBody({ urgent: val })} />
                    <LabelPicker value={newTaskBody.label} updateValue={(label) => updateNewTaskBody({ label })} />
                    <DueDatePicker value={newTaskBody.dueDate} updateValue={(dueDate) => updateNewTaskBody({ dueDate })} />
                    <span style={{ flexGrow: 1 }} />

                    <StyledButton
                        sx={{
                            px: "24px", //
                            height: "42px",
                        }}
                        color="primary"
                        onClick={addTask}
                        disabled={disableAddButton}
                    >
                        Add
                    </StyledButton>
                </FlexBox>
            </FlexBox>
        </>
    );
};

export default AddNewTask;
