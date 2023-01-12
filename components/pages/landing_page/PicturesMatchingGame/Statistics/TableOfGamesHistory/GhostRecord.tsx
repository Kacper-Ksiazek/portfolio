// Tools
import { renderNTimes } from "@/utils/client/renderNTimes";
// Types
import type { FunctionComponent } from "react";
// Styled components

interface GhostRecordProps {
    amountOfColumns: number;
}

const GhostRecord: FunctionComponent<GhostRecordProps> = (props) => {
    return (
        <tr>
            {renderNTimes({
                n: props.amountOfColumns,
                renderElement: (index) => <td key={index}>-</td>,
            })}
        </tr>
    );
};

export default GhostRecord;
