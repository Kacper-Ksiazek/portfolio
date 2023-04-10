// Tools
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

interface UrgencySwitchProps {
    value: boolean;
    updateValue: (val: boolean) => void;
}

const UrgencySwitch: FunctionComponent<UrgencySwitchProps> = (props) => {
    return (
        <FormControlLabel
            sx={{
                height: "28px", //
                ml: "-8px",
            }}
            control={<Switch defaultChecked />} //
            label="Urgent"
            checked={props.value}
            onChange={(e) => {
                props.updateValue((e.target as any).checked);
            }}
        />

        //
    );
};

export default UrgencySwitch;
