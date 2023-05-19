// Tools
import { useMemo } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
import type { LabelID } from "../../../context/LabelsContext/@types";
import type { OptionWithAlias } from "components/atoms/forms/StyledSelect";
// Other components
import Adornment from "./Adornment";
import CreateNewLabel from "../CreateNewLabel";
// Styled components
import { Select } from "./styled_components";

interface UrgencySwitchProps {
    value: LabelID;
    updateValue: (label: LabelID) => void;

    small?: boolean;
}

const LabelPicker: FunctionComponent<UrgencySwitchProps> = (props) => {
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
                onChange={(e) => props.updateValue(e.target.value as any)}
                className="label-picker"
                startAdornment={<Adornment background={getLabelWithID(props.value).color} />}
            />

            <CreateNewLabel
                size={size} //
                small={props.small}
                onCreated={props.updateValue}
            />
        </>
    );
};

export default LabelPicker;
