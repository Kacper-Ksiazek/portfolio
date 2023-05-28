// Types
import type { FunctionComponent } from "react";
import type { Label, LabelID } from "@/components/pages/landing_page/ToDoList2/context/LabelsContext/@types";
// Other components
import EditExistingLabel from "@/components/pages/landing_page/ToDoList2/atoms/modal_actions/EditExistingLabel";

interface EditProps {
    label: Label;
    labelID: LabelID;

    modalOpeningButtonPrompt?: string;
}

const Edit: FunctionComponent<EditProps> = (props) => {
    return (
        <>
            <EditExistingLabel
                labelID={props.labelID} //
                size="42px"
                labelToBeEdited={props.label}
                modalOpeningButtonPrompt={props.modalOpeningButtonPrompt}
            />
        </>
    );
};

export default Edit;
