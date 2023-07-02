// Tools
import { useMemo } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "landing_page/ToDoList2/@types";
import type { OptionWithAlias } from "components/atoms/forms/StyledSelect";
// Other components
import Adornment from "./Adornment";
import CreateNewLabel from "../../modal_actions/CreateNewLabel";
// Styled components
import { Select } from "./styled_components";

export const LABEL_PICKER_SELECT_CLASS_NAME: CSSClassName = "label-picker-select";
export const LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME: CSSClassName = "label-picker-add-new-label-btn";

interface LabelPickerProps {
    value: LabelID;
    updateValue: (label: LabelID) => void;

    small?: boolean;
}

const LabelPicker: FunctionComponent<LabelPickerProps> = (props) => {
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

    if (props.value === undefined) return <></>;

    return (
        <>
            <Select
                size={size}
                value={props.value} //
                options={options}
                className={LABEL_PICKER_SELECT_CLASS_NAME}
                startAdornment={<Adornment background={getLabelWithID(props.value).color} />}
                //
                onChange={(e) => props.updateValue(e.target.value as any)}
            />

            <CreateNewLabel
                size={size} //
                small={props.small}
                className={LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME}
                //
                onCreated={props.updateValue}
            />
        </>
    );
};

export default LabelPicker;
