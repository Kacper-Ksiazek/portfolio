// Tools
import { alpha } from "@mui/material/styles";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
import { Adornment, Select } from "./styled_components";

interface UrgencySwitchProps {
    value: string;
    updateValue: (val: string) => void;

    small?: boolean;
}

const UrgencySwitch: FunctionComponent<UrgencySwitchProps> = (props) => {
    const { labels: availableLabels, getCorrespondingColor } = useLabelsContext();
    const size = props.small ? "32px" : "42px";

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

            <Tooltip title="Create a new label" placement="top">
                <ButtonBase
                    sx={{
                        width: size,
                        height: size,
                        fontSize: "28px",
                        background: alpha("#000", 0.2),
                        border: `1px solid  ${alpha("#fff", 0.23)}`,
                        borderRadius: "3px",
                        marginLeft: props.small ? "2px" : "4px",
                    }}
                    className="alternative-font-family"
                >
                    +
                </ButtonBase>
            </Tooltip>
        </>
    );
};

export default UrgencySwitch;
