// Tools
import { useRef } from "react";
import { alpha, styled } from "@mui/material";
import { useDebeounce } from "@/hooks/useDebounce";
// Types
import type { SxProps } from "@mui/material";
import type { FunctionComponent, ChangeEvent } from "react";
// Styled components
const ColorPickerBase = styled("div")(({ theme }) => ({
    width: "42px",
    height: "42px",
    background: theme.palette.background.MUIFormElementsBackground,
    border: `1px solid ${alpha("#fff", 0.23)}`,
    borderRadius: "3px",
    boxSizing: "border-box",
    position: "relative",
    marginLeft: "8px",
    input: {
        ...theme.mixins.absolute_center,
        zIndex: 0,
        padding: 0,
        width: "1px",
        height: "1px",
    },
    cursor: "pointer",
    transition: "all .3s",
    "div.color-indicator": {
        ...theme.mixins.absolute_center,
        width: "calc(100% - 14px)",
        height: "calc(100% - 14px)",
        borderRadius: "2px",
        transition: "background-color .3s",
        zIndex: 1,
    },
    "&:focus": {
        borderColor: theme.palette.primary.main,
        outline: `1px solid ${theme.palette.primary.main}`,
    },
    "&.error": {
        borderColor: `${theme.palette.error.main} !important`,
        outline: `1px solid ${theme.palette.error.main} !important`,
    },
}));

interface StyledColorPickerProps {
    value: string;
    error?: boolean;
    sx?: SxProps;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
