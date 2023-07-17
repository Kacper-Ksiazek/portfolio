// Tools
import { useRef } from "react";
import { useSafeSnackbarCallback } from "@/hooks/useSafeSnackbarCallback";
import { useLabelsUpdatersContext } from "landing_page/ToDoList2/hooks/useLabelsUpdatersContext";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/@types";
// Other components
import StyledButton from "@/components/atoms/forms/StyledButton";
import DeleteUnusedLabelsConfirmationModal from "./DeleteUnusedLabelsConfirmationModal";
// Material UI Icons
import CleaningServicesRounded from "@mui/icons-material/CleaningServicesRounded";

interface DeleteUnusedLabelsProps {
    id: string;
    unusedLabels: LabelID[];
}

const DeleteUnusedLabels: FunctionComponent<DeleteUnusedLabelsProps> = ({ unusedLabels, ...props }) => {
    const { remove } = useLabelsUpdatersContext();

    const modalOpeningButtonRef = useRef<HTMLButtonElement | null>(null);

    const amountOfRemovedLabels = useRef<number | null>(null);

    const handleDeletion = useSafeSnackbarCallback(() => {
        if (unusedLabels.length === 0) return;

        amountOfRemovedLabels.current = unusedLabels.length;
        remove(unusedLabels);
    }, "All labels have been removed successfully");

    return (
        <>
            <StyledButton
                color="MUIFormElement" //
                ref={modalOpeningButtonRef}
                sx={{
                    opacity: unusedLabels.length,
                    transition: "all .3s",
                }}
                id={props.id}
                disabled={unusedLabels.length === 0}
            >
                <CleaningServicesRounded sx={{ mr: "6px" }} />
                Delete {unusedLabels.length === 0 ? amountOfRemovedLabels.current : unusedLabels.length} unused labels
            </StyledButton>

            <DeleteUnusedLabelsConfirmationModal
                ref={modalOpeningButtonRef} //
                unusedLabels={unusedLabels}
                handleDeletion={handleDeletion}
            />
        </>
    );
};

export default DeleteUnusedLabels;
