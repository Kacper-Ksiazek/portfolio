// Tools
import { useMemo, useState } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "../../../context/LabelsContext/@types";
import type { OptionWithAlias } from "components/atoms/forms/StyledSelect";
// Other components
import Adornment from "./Adornment";
import * as CreateNewLabel from "./CreateNewLabel";
// Styled components
import { Select } from "./styled_components";

interface UrgencySwitchProps {
    value: LabelID;
    updateValue: (label: LabelID) => void;

    small?: boolean;
}

const LabelPicker: FunctionComponent<UrgencySwitchProps> = (props) => {
    const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);
    const { labels: availableLabels, getLabelWithID } = useLabelsContext();

    const options = useMemo<OptionWithAlias<LabelID>[]>(() => {
        const result: OptionWithAlias<LabelID>[] = [];

        for (const key in availableLabels) {
            result.push({
                alias: availableLabels[key].name,
                value: key,
            });
        }

        return result;
    }, [availableLabels]);

    const size = props.small ? "32px" : "42px";

    function applyNewLabel(label: string) {
        props.updateValue(label);
        setModalIsOpened(false);
    }

    if (props.value === undefined) return <></>;

    return (
        <>
            <Select
                size={size}
                value={props.value} //
                options={options}
                onChange={(e) => props.updateValue(e.target.value as any)}
                className="label-picker"
                startAdornment={<Adornment background={getLabelWithID(props.value).color} />}
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

export default LabelPicker;
