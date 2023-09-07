// Tools
import { CSS_REFERENCES } from "./css_references";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useUnusedLabels } from "./hooks/useUnusedLabels";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList/2023/@types/Labels";
import type { LabelsFilters, UpdateEditLabelsFilters } from "../@types";
// Other components
import PickSortingOrder from "./PickSortingOrder";
import DeleteUnusedLabels from "./DeleteUnusedLabels";
import CreateNewLabel from "landing_page/ToDoList/2023/atoms/modal_actions/CreateNewLabel";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Styled components
import ManagementHeaderBase from "./Base";
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";

interface ManagementHeaderProps {
    filters: LabelsFilters;
    amountOfLabels: number;

    updateFilters: UpdateEditLabelsFilters;
}

const ManagementHeader: FunctionComponent<ManagementHeaderProps> = (props) => {
    const { width } = useWindowSizes();
    const unusedLabels: LabelID[] = useUnusedLabels();

    return (
        <ManagementHeaderBase id={CSS_REFERENCES.WRAPPER}>
            <StyledCheckbox
                id={CSS_REFERENCES.FILTERS.URGENCY_SWITCH}
                label="Urgent mode" //
                value={props.filters.urgentModeAlternativeAppearance}
                updateValue={(val) => props.updateFilters({ urgentModeAlternativeAppearance: val })}
            />

            <StyledCheckbox
                id={CSS_REFERENCES.FILTERS.NOT_USED_ONLY_SWITCH}
                label={width < 400 ? "Not used" : "Not used only"} //
                disabled={unusedLabels.length === 0}
                value={props.filters.displayNotUsedLabelsOnly}
                updateValue={(val) => props.updateFilters({ displayNotUsedLabelsOnly: val })}
            />

            <PickSortingOrder
                id={CSS_REFERENCES.FILTERS.PICK_SORTING_ORDER}
                value={props.filters.order} //
                updateValue={(val) => props.updateFilters({ order: val })}
                disabled={props.amountOfLabels <= 1}
            />

            <span
                id={CSS_REFERENCES.EMPTY_SPACE_FILLER} //
            />

            <DeleteUnusedLabels
                id={CSS_REFERENCES.BUTTONS.DELETE_UNUSED_LABELS_BUTTON} //
                unusedLabels={unusedLabels}
            />

            <CreateNewLabel
                id={CSS_REFERENCES.BUTTONS.ADD_NEW_LABEL_BUTTON}
                componentThemeID="PRIMARY"
                disableTooltip
                modalOpeningButtonPrompt={
                    <>
                        <AddRounded sx={{ mr: "2px", fontSize: "24px !important" }} /> Add new label
                    </>
                }
            ></CreateNewLabel>
        </ManagementHeaderBase>
    );
};

export default ManagementHeader;
