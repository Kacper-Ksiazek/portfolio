// Tools
import { useRef } from "react";
import { CSS_REFERENCES } from "../../../css_references";
import { useLabelsUpdatersContext } from "landing_page/ToDoList/2023/hooks";
import { useSafeSnackbarCallback } from "@/hooks/useSafeSnackbarCallback";
// Types
import type { FunctionComponent } from "react";
import type { Label, LabelID } from "landing_page/ToDoList/2023/@types/Labels";
// Other components
import DeleteLabelModal from "./DeleteLabelModal";
import ModalOpeningButton from "landing_page/ToDoList/2023/atoms/modal_actions/__SingleLabelModifier/ModalOpeningButton";
// Material UI Icons
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

interface DeleteLabelProps {
    label: Label;
    labelID: LabelID;
    disabled: boolean;
}

const DeleteLabel: FunctionComponent<DeleteLabelProps> = (props) => {
    const { remove } = useLabelsUpdatersContext();
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleDeletion = useSafeSnackbarCallback(() => {
        remove(props.labelID);
    }, "All labels have been removed successfully");

    return (
        <>
            <ModalOpeningButton
                size="42px" //
                tooltip="Remove this label"
                ref={buttonRef}
                disabled={props.disabled}
                componentThemeID="TRANSPARENT_WHITE"
            >
                <>
                    <DeleteOutlineOutlined className={CSS_REFERENCES.TABLE.BUTTONS.SINGLE.ICON} />
                    <span className={CSS_REFERENCES.TABLE.BUTTONS.SINGLE.TEXT}>Delete</span>
                </>
            </ModalOpeningButton>

            <DeleteLabelModal
                ref={buttonRef} //
                label={props.label}
                handleDeletion={handleDeletion}
            />
        </>
    );
};

export default DeleteLabel;
