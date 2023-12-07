// Tools
import { alpha } from "@mui/material";
// Types
import type { Restriction } from "@/@types/Restriction";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Base from "components/atoms/forms/LengthIndicator/WithWrapper";

interface LengthIndicatorWrapperProps {
    id: string;
    length: number;
    width: `${number}px`;
    restrictions: Restriction;

    children: ReactNode;
}

const LengthIndicatorWrapper: FunctionComponent<LengthIndicatorWrapperProps> = (props) => {
    return (
        <Base
            wrapperProps={{
                id: props.id,
            }}
            lengthIndicator={{
                currentLength: props.length, //
                max: props.restrictions.max,
                min: props.restrictions.min,
                optional: true,
                sx: {
                    width: props.width,
                    color: alpha("#fff", 0.6),
                },
            }}
        >
            {props.children}
        </Base>
    );
};

export default LengthIndicatorWrapper;
