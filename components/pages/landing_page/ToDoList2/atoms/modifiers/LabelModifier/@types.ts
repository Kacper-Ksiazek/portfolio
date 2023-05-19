// Types
import type { LabelID } from "landing_page/ToDoList2/context/LabelsContext/@types";

export interface LabelUpdaterProps {
    mode: "UPDATE_EXISTING";
    idOfLabelToEdit: LabelID;
}

export interface LabelCratorProps {
    mode: "CREATE_NEW_LABEL";
    onChange: (freshlyCreatedLabelID: LabelID) => void;
}

export type LabelModifierProps = LabelCratorProps | LabelUpdaterProps;
