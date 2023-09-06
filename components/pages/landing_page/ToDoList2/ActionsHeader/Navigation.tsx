// Tools
import { alpha } from "@mui/material";
// Types
import type { ActionHeaderSection } from "landing_page/ToDoList2/ActionsHeader/@types";
import type { FunctionComponent, Dispatch, SetStateAction, ReactNode } from "react";
import type { SectionElement } from "@/components/atoms/NavigationBetweenSections/@types";
// Other components
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";

interface ToDoListActionsNavigationProps {
    children: ReactNode;
    tasksInTotal: number;
    currentStage: ActionHeaderSection;
    updateCurrentStage: Dispatch<SetStateAction<ActionHeaderSection>>;

    beforeOnClick?: () => Promise<void> | void;
}

const ToDoListActionsNavigation: FunctionComponent<ToDoListActionsNavigationProps> = (props) => {
    return (
        <NavigationBetweenSections
            sections={
                [
                    {
                        label: "Progress Tracker", //
                        value: "PROGRESS_TRACKER",
                        disabled: props.tasksInTotal === 0,
                    },
                    {
                        label: "Add new task",
                        value: "ADD_NEW_TASK",
                    },
                    {
                        label: "Edit labels",
                        value: "EDIT_LABELS",
                    },
                ] as SectionElement<ActionHeaderSection>[]
            } //
            currentSection={props.currentStage}
            onChoose={props.updateCurrentStage}
            rightSideChildren={props.children}
            beforeOnClick={props.beforeOnClick}
            //
            sx={{
                mb: "8px",
                "span.navigation-between-sections-divider": {
                    background: alpha("#fff", 0.8),
                },
            }}
        />
    );
};

export default ToDoListActionsNavigation;
