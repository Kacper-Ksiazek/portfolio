// Tools
import { useMemo } from "react";
import { ratio } from "../utils/ratio";
import { filterTasks } from "./utils/filterTasks";
// Types
import type { Ratio } from "../@types";
import type { Task } from "../../@types";
import type { FunctionComponent } from "react";
// Other components
import SingleLabel from "./SingleLabel";
import ThereAreNoRatios from "./ThereAreNoRatios";

function distinguishLabelsRatio(array: string[]): Ratio {
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
    const labelsRatio = useMemo<Ratio>(() => {
        return distinguishLabelsRatio(props.tasks.map(({ label }) => label));
    }, [props.tasks]);

    if (labelsRatio.size === 0) return <ThereAreNoRatios />;

    const sortedLabels = [...(labelsRatio.keys() as any)].sort((a, b) => {
        return (labelsRatio.get(a) as number) > (labelsRatio.get(b) as number) ? -1 : 1;
    });

    const Labels = Array.from(sortedLabels, (label, index) => {
        const tasksWithThisLabel = filterTasks(props.tasks, {
            label,
        });
        const completedTasksWithThisLabel = filterTasks(tasksWithThisLabel, {
            isCompleted: true,
        });

        return (
            <SingleLabel
                key={label}
                label={label}
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
