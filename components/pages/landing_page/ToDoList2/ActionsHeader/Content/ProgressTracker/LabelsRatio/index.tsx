// Tools
import { useMemo } from "react";
import { ratio } from "../utils/ratio";
// Types
import type { FunctionComponent } from "react";
import type { TasksCounter, MapEntranceTuple } from "landing_page/ToDoList2/ActionsHeader/@types";
// Other components
import SingleLabel from "./SingleLabel";
import ThereAreNoRatios from "./ThereAreNoRatios";

interface LabelsRatioProps {
    counter: TasksCounter;
    amountOfTasksInTotal: number;
}

function removeEmptyLabelsFromCounter(counter: TasksCounter): MapEntranceTuple[] {
    return (
        [...counter.entries()]
            // Remove labels with no tasks
            .filter(([_, { inTotal }]) => {
                return inTotal > 0;
            })
            // Sort based on amount of tasks in total in DESC order
            .sort(([_, a], [__, b]) => {
                return b.inTotal - a.inTotal;
            })
    );
}

const LabelsRatio: FunctionComponent<LabelsRatioProps> = (props) => {
    const counterWithNoEmptyLabels = useMemo<MapEntranceTuple[]>(() => {
        return removeEmptyLabelsFromCounter(props.counter);
    }, [props.counter]);

    if (counterWithNoEmptyLabels.length === 0) return <ThereAreNoRatios />;

    return (
        <>
            {counterWithNoEmptyLabels.map(([labelID, { completed, inTotal }], index) => {
                const width = ratio(inTotal, props.amountOfTasksInTotal);

                return (
                    <SingleLabel
                        key={labelID} //
                        labelID={labelID}
                        width={width}
                        progress={{ completed, inTotal, displayLabelNameInstead: true }}
                    />
                );
            })}
        </>
    );
};

export default LabelsRatio;
