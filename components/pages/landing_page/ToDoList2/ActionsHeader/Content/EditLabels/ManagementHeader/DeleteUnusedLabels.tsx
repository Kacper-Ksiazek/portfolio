// Tools
import { useMemo } from "react";
import { alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
import type { LabelID, TaskCountsCollection } from "landing_page/ToDoList2/@types";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
// Material UI Icons
import CleaningServicesRounded from "@mui/icons-material/CleaningServicesRounded";

interface DeleteUnusedLabelsProps {
    counter: TaskCountsCollection;
}

const DeleteUnusedLabels: FunctionComponent<DeleteUnusedLabelsProps> = (props) => {
    const unusedLabels: LabelID[] = useMemo<LabelID[]>(() => {
        return [...props.counter.entries()]
            .filter(([_, counts]) => {
                return counts.inTotal === 0;
            })
            .map(([labelId, counts]) => {
                return labelId;
            });
    }, [props.counter]);

    function onClick() {
        if (unusedLabels.length === 0) return;
    }

    return (
        <StyledButton
            subtleHoverEffect
            sx={{
                background: alpha("#000", 0.2),
                borderColor: alpha("#fff", 0.23),
                // opacity: 0,
                transition: "opacity .3s",
            }}
        >
            <CleaningServicesRounded sx={{ mr: "6px" }} />
            Delete {unusedLabels.length} unused labels
        </StyledButton>
    );
};

export default DeleteUnusedLabels;
