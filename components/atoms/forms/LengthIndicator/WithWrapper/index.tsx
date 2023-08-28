// Tools
import useWindowSize from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent } from "react";
import type { WrapperWithWitdthIndicatorProps } from "./@types";
// Other components
import LengthIndicator from "..";
// Styled components
import WrapperWithLengthIndicatorBase from "./Base";

const WrapperWithWitdthIndicator: FunctionComponent<WrapperWithWitdthIndicatorProps> = (props) => {
    const { width: viewportWidth } = useWindowSize();
    const { width: lengthIndicatorWidth, ...lengthIndicatorPropsToForward } = props.lengthIndicator;

    const applyColumnLayout: boolean = props.column ? true : viewportWidth < 500;

    return (
        <WrapperWithLengthIndicatorBase column={applyColumnLayout} {...props.wrapperProps}>
            {props.children}

            <LengthIndicator
                {...lengthIndicatorPropsToForward} //
                sx={{ width: lengthIndicatorWidth }}
                disableErrorMessages
            />
        </WrapperWithLengthIndicatorBase>
    );
};

export default WrapperWithWitdthIndicator;
