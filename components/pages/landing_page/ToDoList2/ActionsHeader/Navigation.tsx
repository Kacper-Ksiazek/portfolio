// Tools
import { alpha } from "@mui/material";
// Types
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";
import type { FunctionComponent, Dispatch, SetStateAction, ReactNode } from "react";
// Other components
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";

interface ToDoListActionsNavigationProps {
    children: ReactNode;
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
                    },
                    {
                        label: "Add new task",
                        value: "ADD_NEW_TASK",
                    },
                    {
                        label: "Edit labels",
                        value: "EDIT_LABELS",
                    },
                ] as { label: string; value: ActionHeaderSection }[]
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
