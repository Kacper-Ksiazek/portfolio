// Tools
import { useRef } from "react";
// Types
import type { FunctionComponent } from "react";
import type { TextFieldProps } from "@mui/material/TextField";
import type { ComponentThemeName } from "@/components/atoms/forms/_common_component_color_themes";
// Other components
import ClearButton from "@/components/atoms/forms/_ClearButton";
import StyledInput from "@/components/atoms/forms/StyledInput";
import OptionalPropertyIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";
// Material UI Icons
import PlaceIcon from "@mui/icons-material/Place";

type LocalizationProps = Exclude<TextFieldProps, "onChange" | "onInput"> & {
    value: string | null;

    updateValue: (val: string | null) => void;

    small?: boolean;
    error?: boolean;
    componentThemeID?: ComponentThemeName;
};

const Localization: FunctionComponent<LocalizationProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { sx: receivedSxProps, value, updateValue, small, ...propsToForward } = props;

    const disableClearButton: boolean = value === null || value === "";

    function clear() {
        if (disableClearButton) return;

        props.updateValue(null);

        if (inputRef.current) inputRef.current.value = "";
    }

    return (
        <div style={{ position: "relative", flexGrow: 1 }}>
            <OptionalPropertyIndicator />

            <PlaceIcon
                sx={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                }}
            />

            <StyledInput
                {...propsToForward}
                value={value}
                onChange={(e) => updateValue(e.target.value)}
                sx={{
                    ...receivedSxProps,
                    width: "100%",
                    input: {
                        padding: "0 36px 0 38px !important",
                        height: props.small ? "32px" : "42px",
                    },
                }}
                inputRef={inputRef}
                error={props.error}
                componentThemeID={props.error ? "ERROR" : props.componentThemeID}
            />

            <ClearButton
                disabled={disableClearButton} //
                clear={clear}
            />
        </div>
    );
};

export default Localization;
