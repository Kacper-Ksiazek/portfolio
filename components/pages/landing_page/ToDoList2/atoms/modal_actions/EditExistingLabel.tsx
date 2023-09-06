// Tools
import { useState } from "react";
import { useSafeSnackbarCallback } from "@/hooks/useSafeSnackbarCallback";
import { useLabelsUpdatersContext } from "@/components/pages/landing_page/ToDoList2/hooks";
// Types
import type { ReactNode, FunctionComponent } from "react";
import type { Label, LabelID } from "landing_page/ToDoList2/@types/Labels";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Other components
import { Modal, ModalOpeningButton } from "./__SingleLabelModifier";

interface EditExistingLabelProps {
    size: `${string}px`;
    labelID: LabelID;
    labelToBeEdited: Label;

    small?: boolean;
    className?: string;
    modalOpeningButtonPrompt?: ReactNode;
}

const EditExistingLabel: FunctionComponent<EditExistingLabelProps> = (props) => {
    const labelsUpdatersContext = useLabelsUpdatersContext();
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    const updateLabel = useSafeSnackbarCallback<Label>((data) => {
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
                wrapperProps={{
                    className: props.className,
                }}
                componentThemeID="TRANSPARENT_WHITE"
            >
                {props.modalOpeningButtonPrompt ? props.modalOpeningButtonPrompt : <AddRounded />}
            </ModalOpeningButton>

            {(() => {
                if (modalIsOpened === true) {
                    return (
                        <Modal
                            title="Edit existing label"
                            actionButtonPrompt="Save changes"
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
