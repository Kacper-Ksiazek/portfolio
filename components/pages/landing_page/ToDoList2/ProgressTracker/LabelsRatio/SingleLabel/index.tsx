// Tools
import { useLabelsContext } from "../../../hooks";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import LabelName from "../LabelName";
// Styled components
import SingleLabelWrapper from "./Base";
import { ProgressBar } from "../../styled_components/ProgressBar";

interface SingleLabelBase {
    width: `${string}%`;
    completion: `${string}%`;
}

interface SingleLabelPropsWithDescription extends SingleLabelBase {
    description: ReactNode;
}

interface SingleLabelPropsWithLabel extends SingleLabelBase {
    label: string;
}

function hasLabelWithAssociatedColor(val: unknown): val is SingleLabelPropsWithLabel {
    return typeof val === "object" && val !== null && "label" in val;
}

type SingleLabelProps = SingleLabelPropsWithDescription | SingleLabelPropsWithLabel;

const SingleLabel: FunctionComponent<SingleLabelProps> = (props) => {
    const { getCorrespondingColor } = useLabelsContext();

    const propsAreWithLabel = hasLabelWithAssociatedColor(props);

    const backgroundColor = propsAreWithLabel ? getCorrespondingColor(props.label) : undefined;
    const content = hasLabelWithAssociatedColor(props) ? props.label : props.description;

    return (
        <SingleLabelWrapper width={props.width}>
            <ProgressBar
                color={backgroundColor} //
                completion={props.completion}
            />
            <LabelName
                label={content} //
                strikeThroughColor={backgroundColor}
                isLabelCompleted={props.completion === "100.00%"}
            />
        </SingleLabelWrapper>
    );
};

export default SingleLabel;
