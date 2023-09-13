// Tools
import { useRef } from "react";
import { useDebeounce } from "@/hooks/useDebounce";
// Types
import type { SxProps } from "@mui/material";
import type { FunctionComponent, ChangeEvent } from "react";
import type { ComponentThemeName } from "../_common_component_color_themes";
// Styled components
import ColorPickerBase from "./Base";

interface StyledColorPickerProps {
    value: string;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    sx?: SxProps;
    error?: boolean;
    componentThemeID?: ComponentThemeName;
}

const StyledColorPicker: FunctionComponent<StyledColorPickerProps> = (props) => {
    const colorInputRef = useRef<HTMLInputElement | null>(null);

    const handleColorChange = useDebeounce<[ChangeEvent<HTMLInputElement>], void>(([e]) => {
        props.onChange(e);
    }, 50);

    function onClick() {
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    }

    return (
        <ColorPickerBase
            role="button" //
            tabIndex={0}
            onClick={onClick}
            className={props.error ? "error" : ""}
            componentThemeID={props.componentThemeID}
        >
            <input
                type="color" //
                tabIndex={-1}
                onChange={handleColorChange}
                ref={colorInputRef}
            />
            <div
                className="color-indicator"
                style={{
                    backgroundColor: props.value,
                }}
            />
        </ColorPickerBase>
    );
};

export default StyledColorPicker;
