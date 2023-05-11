// Tools
import { useState } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import * as CreateNewLabel from "./CreateNewLabel";
// Styled components
import { Adornment, Select } from "./styled_components";

interface UrgencySwitchProps {
    value: string;
    updateValue: (label: string) => void;

    small?: boolean;
}

const UrgencySwitch: FunctionComponent<UrgencySwitchProps> = (props) => {
    const { labels: availableLabels, getCorrespondingColor } = useLabelsContext();
    const size = props.small ? "32px" : "42px";
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);

    function applyNewLabel(label: string) {
        props.updateValue(label);
        setModalIsOpened(false);
    }

    return (
        <>
            <Select
                size={size}
                value={props.value} //
                options={availableLabels}
                onChange={(e) => props.updateValue(e.target.value as any)}
                className="label-picker"
                startAdornment={<Adornment background={getCorrespondingColor(props.value)} />}
            />

            <CreateNewLabel.ModalOpeningButton
                size={size} //
                small={props.small}
                openModal={() => setModalIsOpened(true)}
            />

            {(() => {
                if (modalIsOpened === true) {
                    return (
                        <CreateNewLabel.Modal
                            isOpen={modalIsOpened} //
                            onClose={() => setModalIsOpened(false)}
                            onAdd={applyNewLabel}
                        />
                    );
                }
            })()}
        </>
    );
};

export default UrgencySwitch;
