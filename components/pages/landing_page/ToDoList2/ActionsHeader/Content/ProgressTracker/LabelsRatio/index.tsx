// Tools
import { useMemo } from "react";
import { ratio } from "../utils/ratio";
import { filterTasks } from "./utils/filterTasks";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
import type { LabelID } from "../../../../context/LabelsContext/@types";
// Other components
import SingleLabel from "./SingleLabel";
import ThereAreNoRatios from "./ThereAreNoRatios";

function countLabels(array: LabelID[]): Map<LabelID, number> {
    const result = new Map();

    for (const item of array) {
        if (result.has(item)) result.set(item, result.get(item) + 1);
        else result.set(item, 1);
    }

    return result;
}

interface LabelsRatioProps {
    tasks: Task[];
    amountOfTasksInTotal: number;
}

const LabelsRatio: FunctionComponent<LabelsRatioProps> = (props) => {
    const countedLabels = useMemo<Map<LabelID, number>>(() => {
        return countLabels(props.tasks.map(({ labelID }) => labelID));
    }, [props.tasks]);

    if (countedLabels.size === 0) return <ThereAreNoRatios />;

    const sortedLabels = [...(countedLabels.keys() as any)].sort((a, b) => {
        return (countedLabels.get(a) as number) > (countedLabels.get(b) as number) ? -1 : 1;
    });

    const Labels = Array.from(sortedLabels, (labelID, index) => {
        const tasksWithThisLabel = filterTasks(props.tasks, { labelID });
        const completedTasksWithThisLabel = filterTasks(tasksWithThisLabel, { isCompleted: true });

        return (
            <SingleLabel
                key={labelID}
                labelID={labelID}
                width={ratio(tasksWithThisLabel.length, props.amountOfTasksInTotal)} //
                progress={{
                    completed: completedTasksWithThisLabel.length,
                    inTotal: tasksWithThisLabel.length,
                    displayLabelNameInstead: true,
                }}
            />
        );
    });

    return <>{Labels}</>;
};

export default LabelsRatio;
