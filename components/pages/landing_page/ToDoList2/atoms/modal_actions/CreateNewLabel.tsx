// Tools
import { useState } from "react";
import { useSafeSnackbarCallback } from "@/hooks/useSafeSnackbarCallback";
import { useLabelsUpdatersContext } from "@/components/pages/landing_page/ToDoList2/hooks";
// Types
import type { ReactNode, FunctionComponent } from "react";
import type { LabelID, Label } from "landing_page/ToDoList2/@types";
import type { StyledButtonThemeName } from "@/components/atoms/forms/StyledButton/ComponentColorThemes";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Other components
import { Modal, ModalOpeningButton } from "./__SingleLabelModifier";

interface CreateNewLabelProps {
    id?: string;
    className?: string;

    small?: boolean;
    size?: `${string}px`;
    disableTooltip?: boolean;
    componentThemeID?: StyledButtonThemeName;
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
                small={props.small} //
                size={props.size as any}
                openModal={() => setModalIsOpened(true)}
                tooltip={props.disableTooltip === false ? "Create a new label" : ""}
                isIconButton={typeof props.modalOpeningButtonPrompt === "undefined"}
                componentThemeID={props.componentThemeID ?? "MUI"}
                wrapperProps={{
                    className: props.className,
                    id: props.id,
                }}
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
