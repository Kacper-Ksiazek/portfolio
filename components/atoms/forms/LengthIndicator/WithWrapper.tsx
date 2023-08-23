// Tools
import { styled } from "@mui/material";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, HTMLAttributes, ReactNode } from "react";
// Other components
import LengthIndicator from "@/components/atoms/forms/LengthIndicator";
// Styled components
const WrapperWithLengthIndicatorBase = styled("span")(({ theme }) => ({
    position: "relative", //
    display: "flex",
    alignItems: "flex-end",
    gap: "6px",
}));

interface WrapperWithWitdthIndicatorProps {
    children: ReactNode;

    wrapperProps?: { sx?: SxProps } & HTMLAttributes<HTMLSpanElement>;
    lengthIndicator: {
        currentLength: number;
        max: number;
        min: number;
        width: `${number}px`;
    };
}

const WrapperWithWitdthIndicator: FunctionComponent<WrapperWithWitdthIndicatorProps> = (props) => {
    return (
        <WrapperWithLengthIndicatorBase {...props.wrapperProps}>
            {props.children}

            <LengthIndicator
                currentLength={props.lengthIndicator.currentLength} //
                max={props.lengthIndicator.max}
                min={props.lengthIndicator.min}
                sx={{ width: props.lengthIndicator.width }}
                disableErrorMessages
            />
        </WrapperWithLengthIndicatorBase>
    );
};

export default WrapperWithWitdthIndicator;
