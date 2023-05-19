// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/context/LabelsContext/@types";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Other components
import { Modal, ModalOpeningButton } from "./__SingleLabelModifier";

interface CreateNewLabelProps {
    small?: boolean;
    size: `${string}px`;

    updateValue: (label: LabelID) => void;
}

const CreateNewLabel: FunctionComponent<CreateNewLabelProps> = (props) => {
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    function applyNewLabel(label: string) {
        props.updateValue(label);
    }

    return (
        <>
            <ModalOpeningButton
                size={props.size} //
                small={props.small}
                openModal={() => setModalIsOpened(true)}
                icon={<AddRounded />} //
            />

            {(() => {
                if (modalIsOpened === true) {
                    return (
                        <Modal
                            title="Create a new label"
                            isOpen={modalIsOpened}
                            msgOnSuccess="Label has been created successfully"
                            //
                            onClose={() => setModalIsOpened(false)}
                            onAdd={applyNewLabel}
                        />
                    );
                }
            })()}
        </>
    );
};

export default CreateNewLabel;
