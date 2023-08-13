// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
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
    id: string;
    children: ReactNode;
    lengthIndicator: {
        currentLength: number;
        max: number;
        width: `${number}px`;
    };
}

const WrapperWithWitdthIndicator: FunctionComponent<WrapperWithWitdthIndicatorProps> = (props) => {
    return (
        <WrapperWithLengthIndicatorBase id={props.id}>
            {props.children}

            <LengthIndicator
                currentLength={props.lengthIndicator.currentLength} //
                max={props.lengthIndicator.max}
                sx={{ width: props.lengthIndicator.width }}
                disableErrorMessages
            />
        </WrapperWithLengthIndicatorBase>
    );
};

export default WrapperWithWitdthIndicator;
