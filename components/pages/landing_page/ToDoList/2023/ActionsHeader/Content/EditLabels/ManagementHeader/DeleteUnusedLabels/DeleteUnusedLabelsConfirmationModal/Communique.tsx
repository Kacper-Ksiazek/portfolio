// Types
import type { FunctionComponent } from "react";

interface CommuniqueProps {
    amountOfUnusedLabels: number;
}

const Communique: FunctionComponent<CommuniqueProps> = (props) => {
    if (props.amountOfUnusedLabels) {
        return <p>Are you sure you want to remove following label?</p>;
    }
    return (
        <p>
            Are you sure you want to remove <strong>all {props.amountOfUnusedLabels} following labels</strong> which are currently not in use?
        </p>
    );
};

export default Communique;
