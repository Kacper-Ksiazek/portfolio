// Tools
import { CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
import type { Label, LabelID } from "landing_page/ToDoList/2023/@types/Labels";
// Other components
import EditExistingLabel from "@/components/pages/landing_page/ToDoList/2023/atoms/modal_actions/EditExistingLabel";
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
                        <Settings className={CSS_REFERENCES.TABLE.BUTTONS.SINGLE.ICON} />
                        <span className={CSS_REFERENCES.TABLE.BUTTONS.SINGLE.TEXT}>
                            {props.modalOpeningButtonPrompt}
                            {/*  */}
                        </span>
                    </>
                }
            />
        </>
    );
};

export default Edit;
