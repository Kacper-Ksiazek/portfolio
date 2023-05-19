// Tools
// Types
import type { FunctionComponent } from "react";
import type { TasksCounter } from "landing_page/ToDoList2/ActionsHeader/@types";

interface EditLabelsProps {
    counter: TasksCounter;
}

const EditLabels: FunctionComponent<EditLabelsProps> = (props) => {
    return (
        <>
            {[...props.counter.entries()].map((item, index) => {
                return <span key={index}>{JSON.stringify(item)}</span>;
            })}
        </>
    );
};

export default EditLabels;
