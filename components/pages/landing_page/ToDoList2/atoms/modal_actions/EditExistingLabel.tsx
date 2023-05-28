// Tools
import { useState } from "react";
import { useSafeSnackbarCallback } from "@/hooks/useSafeSnackbarCallback";
import { useLabelsUpdatersContext } from "@/components/pages/landing_page/ToDoList2/hooks";
// Types
import type { ReactNode, FunctionComponent } from "react";
import type { Color } from "./__SingleLabelModifier/Modal/@types";
import type { Label, LabelID } from "landing_page/ToDoList2/context/LabelsContext/@types";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Other components
import { Modal, ModalOpeningButton } from "./__SingleLabelModifier";

interface EditExistingLabelProps {
    small?: boolean;
    size: `${string}px`;
    labelID: LabelID;
    labelToBeEdited: Label;

    modalOpeningButtonPrompt?: ReactNode;
}

const EditExistingLabel: FunctionComponent<EditExistingLabelProps> = (props) => {
    const labelsUpdatersContext = useLabelsUpdatersContext();
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    const updateLabel = useSafeSnackbarCallback<Color>((data) => {
        labelsUpdatersContext.update(props.labelID, data);
    }, "Label has been updated successfully");

    return (
        <>
            <ModalOpeningButton
                size={props.size} //
                small={props.small}
                openModal={() => setModalIsOpened(true)}
                isIconButton={typeof props.modalOpeningButtonPrompt === "undefined"}
                tooltip="Modify this label"
            >
                {props.modalOpeningButtonPrompt ? props.modalOpeningButtonPrompt : <AddRounded />}
            </ModalOpeningButton>

            {(() => {
                if (modalIsOpened === true) {
                    return (
                        <Modal
                            title="Edit existing label"
                            actionButtonPrompt="Edit"
                            isOpen={modalIsOpened}
                            noErrorsMessage="Label can be updated"
                            //
                            labelToBeEdited={props.labelToBeEdited}
                            onClose={() => setModalIsOpened(false)}
                            handleAction={updateLabel}
                        />
                    );
                }
            })()}
        </>
    );
};

export default EditExistingLabel;
