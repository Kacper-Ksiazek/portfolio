// Types
import type { FunctionComponent, Dispatch } from "react";
import type { EditLabelsFilters, TaskCountsCollection } from "landing_page/ToDoList2/@types";
// Other components
import PickSortingOrder from "./PickSortingOrder";
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
                value={props.filters.displayNotUsedLabelsOnly}
                updateValue={(val) => props.updateFilters({ displayNotUsedLabelsOnly: val })}
            />
            <PickSortingOrder
                value={props.filters.order} //
                updateValue={(val) => props.updateFilters({ order: val })}
            />

            <span style={{ flexGrow: 1 }} />

            {/* <StyledButton
                sx={{
                    background: alpha("#000", 0.2),
                    borderColor: alpha("#fff", 0.23),
                    // opacity: 0,
                    transition: "opacity .3s",
                }}
            >
                <CleaningServicesRounded sx={{ mr: "6px" }} />
                Delete 3 unused labels
            </StyledButton> */}

            <CreateNewLabel
                primary
                disableTooltip
                modalOpeningButtonPrompt={
                    <>
                        <AddRounded sx={{ mr: "2px" }} /> Add new label
                    </>
                }
            ></CreateNewLabel>
        </FlexBox>
    );
};

export default ManagementHeader;
