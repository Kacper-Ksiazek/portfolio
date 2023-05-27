// Tools
import { alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
import type { UpdateFilters, LabelsFilters } from "../@types";
// Other components
import PickSortingOrder from "./PickSortingOrder";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
import CleaningServicesRounded from "@mui/icons-material/CleaningServicesRounded";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { StyledCheckbox, StyledButton } from "@/components/atoms/forms";
import { TasksCounter } from "../../../@types";

interface ManagementHeaderProps {
    counter: TasksCounter;
    filters: LabelsFilters;
    updateFilters: UpdateFilters;
}

const ManagementHeader: FunctionComponent<ManagementHeaderProps> = (props) => {
    // Zrobic spradzamoe czu, w ogole mozna wykonac usuwanie nieuzywanych labelow
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

            <StyledButton color="primary">
                <AddRounded /> Add new label
            </StyledButton>
        </FlexBox>
    );
};

export default ManagementHeader;
