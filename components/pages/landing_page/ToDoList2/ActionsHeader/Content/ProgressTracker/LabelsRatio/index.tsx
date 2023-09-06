// Tools
import { useMemo } from "react";
import { ratio } from "@/utils/ratio";
import { useTaskCounterContext } from "../../hooks/useTaskCounterContext";
// Types
import type { FunctionComponent } from "react";
import type { TaskCountsCollection, TaskCountsCollectionEntranceTuple } from "landing_page/ToDoList2/@types/Counters";
// Other components
import SingleLabel from "./SingleLabel";
import ThereAreNoRatios from "./ThereAreNoRatios";

interface LabelsRatioProps {
    amountOfTasksInTotal: number;
}

function removeEmptyLabelsFromCounter(counter: TaskCountsCollection): TaskCountsCollectionEntranceTuple[] {
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
    const { counter } = useTaskCounterContext();

    const counterWithNoEmptyLabels = useMemo<TaskCountsCollectionEntranceTuple[]>(() => {
        return removeEmptyLabelsFromCounter(counter);
    }, [counter]);

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
