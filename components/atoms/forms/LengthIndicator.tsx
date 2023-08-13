// Tools
import { styled } from "@mui/material";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent } from "react";
import SmoothConditionalRender from "@/components/utils/SmoothConditionalRender";
// Styled components
const LengthIndicatorBase = styled("span", {
    shouldForwardProp: (prop: string) => !["invalid"].includes(prop),
})<{
    invalid: boolean;
}>(({ theme, ...props }) => ({
    // border: "1px solid red",
    fontSize: "14px",
    opacity: 0.6,
    display: "flex",
    gap: "6px",
    cursor: "default",

    transition: "all .3s",
    ...(props.invalid && {
        opacity: 1,
        fontWeight: 500,
        color: theme.palette.error.main,
    }),
}));

export const LENGTH_INDICATOR_CSS_NAME: CSSClassName = "length-indicator";

interface LengthIndicatorProps {
    currentLength: number;
    max: number;

    min?: number;
    sx?: SxProps;
    disableErrorMessages?: boolean;
}

const LengthIndicator: FunctionComponent<LengthIndicatorProps> = (props) => {
    const { currentLength, max, min } = props;

    const valueIsTooShort: boolean = min ? currentLength > 0 && currentLength < min : false;
    const valueIsTooLong: boolean = currentLength > max;

    return (
        <LengthIndicatorBase
            invalid={valueIsTooLong || valueIsTooShort} //
            sx={props.sx}
            className={LENGTH_INDICATOR_CSS_NAME}
        >
            <span>{`${currentLength} / ${max}`}</span>

            {props.disableErrorMessages !== true && (
                <span style={{ position: "relative", minWidth: "160px" }}>
                    <SmoothConditionalRender when={valueIsTooLong}>
                        <span>{`Maximum length is ${max}`} </span>
                    </SmoothConditionalRender>

                    <SmoothConditionalRender when={valueIsTooShort}>
                        <span>{`Minimum length is ${min}`} </span>
                    </SmoothConditionalRender>
                </span>
            )}
            {/*  */}
        </LengthIndicatorBase>
    );
};

export default LengthIndicator;
