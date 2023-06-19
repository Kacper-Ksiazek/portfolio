// Tools
import { useUnusedLabels } from "./hooks/useUnusedLabels";
// Types
import type { FunctionComponent, Dispatch } from "react";
import type { EditLabelsFilters, LabelID, TaskCountsCollection } from "landing_page/ToDoList2/@types";
// Other components
import PickSortingOrder from "./PickSortingOrder";
import DeleteUnusedLabels from "./DeleteUnusedLabels";
import CreateNewLabel from "landing_page/ToDoList2/atoms/modal_actions/CreateNewLabel";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";

interface ManagementHeaderProps {
    counter: TaskCountsCollection;
    filters: EditLabelsFilters;
    updateFilters: Dispatch<Partial<EditLabelsFilters>>;
}

const ManagementHeader: FunctionComponent<ManagementHeaderProps> = (props) => {
    const unusedLabels: LabelID[] = useUnusedLabels(props.counter);

    return (
        <FlexBox
            sx={{
                width: "100%",
                paddingBottom: "12px",
                "&>*": {
                    marginRight: "6px",
                },
            }}
        >
            <StyledCheckbox
                label="Urgent mode" //
                value={props.filters.urgentModeAlternativeAppearance}
                updateValue={(val) => props.updateFilters({ urgentModeAlternativeAppearance: val })}
            />

            <StyledCheckbox
                label="Not used only" //
                disabled={unusedLabels.length === 0}
                value={props.filters.displayNotUsedLabelsOnly}
                updateValue={(val) => props.updateFilters({ displayNotUsedLabelsOnly: val })}
            />

            <PickSortingOrder
                value={props.filters.order} //
                updateValue={(val) => props.updateFilters({ order: val })}
            />

            <span style={{ flexGrow: 1 }} />

            <DeleteUnusedLabels unusedLabels={unusedLabels} />

            <CreateNewLabel
                primary
                disableTooltip
                modalOpeningButtonPrompt={
                    <>
                        <AddRounded sx={{ mr: "2px", fontSize: "24px !important" }} /> Add new label
                    </>
                }
            ></CreateNewLabel>
        </FlexBox>
    );
};

export default ManagementHeader;
