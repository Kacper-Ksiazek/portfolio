// Tools
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";

interface UrgencySwitchProps {
    value: string;
    updateValue: (val: string) => void;

    small?: boolean;
}

const UrgencySwitch: FunctionComponent<UrgencySwitchProps> = (props) => {
    const { labels: availableLabels } = useLabelsContext();
    const size = props.small ? "32px" : "40px";

    return (
        <StyledSelect
            value={props.value} //
            options={availableLabels}
            onChange={(e) => props.updateValue(e.target.value)}
            sx={{
                height: size,
                ".MuiSelect-select": {
                    fontSize: "16px",
                    paddingBottom: "4px !important",
                    paddingTop: "4px !important",
                },
            }}
        />
    );
};

export default UrgencySwitch;
