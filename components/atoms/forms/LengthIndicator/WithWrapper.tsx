// Tools
import { styled } from "@mui/material";
// Types
import type { SxProps } from "@/@types/MUI";
import type { FunctionComponent, HTMLAttributes, ReactNode } from "react";
// Other components
import LengthIndicator from "@/components/atoms/forms/LengthIndicator";
// Styled components
function shouldForwardProp(prop: string) {
    return prop !== "column";
}

const WrapperWithLengthIndicatorBase = styled("span", { shouldForwardProp })<{ column: boolean }>(({ theme, ...props }) => ({
    position: "relative", //
    display: "flex",
    flexDirection: props.column === true ? "column" : "row",
    ...(props.column === false
        ? {
              gap: "6px",
              alignItems: "flex-end",
          }
        : {
              flexDirection: "column",
          }),
}));

interface WrapperWithWitdthIndicatorProps {
    children: ReactNode;

    column?: boolean;
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
        <WrapperWithLengthIndicatorBase column={props.column ?? false} {...props.wrapperProps}>
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
