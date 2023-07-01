// Tools
import { useState } from "react";
import { useSafeSnackbarCallback } from "@/hooks/useSafeSnackbarCallback";
import { useLabelsUpdatersContext } from "@/components/pages/landing_page/ToDoList2/hooks";
// Types
import type { ReactNode, FunctionComponent } from "react";
import type { LabelID, Label } from "landing_page/ToDoList2/@types";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Other components
import { Modal, ModalOpeningButton } from "./__SingleLabelModifier";

interface CreateNewLabelProps {
    small?: boolean;
    primary?: boolean;
    size?: `${string}px`;
    disableTooltip?: boolean;
    modalOpeningButtonPrompt?: ReactNode;

    onCreated?: (label: LabelID) => void;
}

const CreateNewLabel: FunctionComponent<CreateNewLabelProps> = (props) => {
    const labelsUpdatersContext = useLabelsUpdatersContext();
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    const addNewLabel = useSafeSnackbarCallback<Label>((newLabel) => {
        const newLabelID = labelsUpdatersContext.add({
            color: newLabel.color,
            name: newLabel.name,
        });

        if (typeof props.onCreated === "function") props.onCreated(newLabelID);
    }, "Label has been created successfully");

    return (
        <>
            <ModalOpeningButton
                size={props.size as any} //
                small={props.small}
                openModal={() => setModalIsOpened(true)}
                isIconButton={typeof props.modalOpeningButtonPrompt === "undefined"}
                tooltip={props.disableTooltip === false ? "Create a new label" : ""}
                primary={props.primary}
                className="label-picker-add-new-label-btn"
            >
                {props.modalOpeningButtonPrompt ? props.modalOpeningButtonPrompt : <AddRounded />}
            </ModalOpeningButton>
            {(() => {
                if (modalIsOpened === true) {
                    return (
                        <Modal
                            title="Create a new label"
                            actionButtonPrompt="Add"
                            isOpen={modalIsOpened}
                            noErrorsMessage="A new label can be created"
                            //
                            onClose={() => setModalIsOpened(false)}
                            handleAction={addNewLabel}
                        />
                    );
                }
            })()}
        </>
    );
};

CreateNewLabel.defaultProps = {
    size: "42px",
    disableTooltip: false,
};

export default CreateNewLabel;
