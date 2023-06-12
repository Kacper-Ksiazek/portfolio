// Tools
import { useMemo, useRef } from "react";
// Types
import type { FunctionComponent } from "react";
import type { LabelID, TaskCountsCollection } from "landing_page/ToDoList2/@types";
// Other components
import Label from "landing_page/ToDoList2/atoms/LabelBase";
import StyledButton from "@/components/atoms/forms/StyledButton";
import ConfirmationModal from "@/components/atoms/ConfirmationModal";
// Material UI Icons
import CleaningServicesRounded from "@mui/icons-material/CleaningServicesRounded";

interface DeleteUnusedLabelsProps {
    counter: TaskCountsCollection;
}

const DeleteUnusedLabels: FunctionComponent<DeleteUnusedLabelsProps> = (props) => {
    const modalOpeningButtonRef = useRef<HTMLButtonElement | null>(null);

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
    // jest problem z otwieraniem dwukrotnie trgo amego confirmation modala naprawic to !!! MILEGO DNIA SAMEMU SOBIE
    return (
        <>
            <StyledButton
                color="MUIFormElement" //
                onClick={onClick}
                ref={modalOpeningButtonRef}
            >
                <CleaningServicesRounded sx={{ mr: "6px" }} />
                Delete {unusedLabels.length} unused labels
            </StyledButton>

            <ConfirmationModal
                ref={modalOpeningButtonRef}
                title="Delete unused labels"
                actionButton={{
                    disabled: false,
                    onClick: () => {},
                    prompt: "Remove",
                }}
            >
                <>
                    <p>
                        Are you sure you want to remove <strong>{unusedLabels.length}</strong> labels which are currently not in use?
                    </p>

                    {unusedLabels.join(" | ")}
                </>
            </ConfirmationModal>
        </>
    );
};

export default DeleteUnusedLabels;
