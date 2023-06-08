// Types
import type { FunctionComponent } from "react";
import type { Label, LabelID } from "landing_page/ToDoList2/@types";
// Other components
import EditExistingLabel from "@/components/pages/landing_page/ToDoList2/atoms/modal_actions/EditExistingLabel";
// Material UI Icons
import Settings from "@mui/icons-material/Settings";

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
                modalOpeningButtonPrompt={
                    <>
                        <Settings />
                        {props.modalOpeningButtonPrompt}
                    </>
                }
            />
        </>
    );
};

export default Edit;
