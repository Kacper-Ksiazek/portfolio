// Tools
import { alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
import type { TasksCounter } from "landing_page/ToDoList2/ActionsHeader/@types";
// Other components
import SingleLabel from "./SingleLabel";

const StyledTable = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "auto 200px 1fr auto",
    gridTemplateRows: "repeat(4, 1fr)",
    width: "100%",
    alignItems: "stretch",
    gridGap: "4px",
    "&>*": {
        padding: "8px 20px",
        borderRadius: "3px",
        border: `1px solid ${alpha("#fff", 0.3)}`,
    },
}));

interface EditLabelsProps {
    counter: TasksCounter;
}

const EditLabels: FunctionComponent<EditLabelsProps> = (props) => {
    return (
        <>
            <input type="checkbox" name="urgent_mode" />
            <input type="checkbox" name="not_used_only" />
            <select name="sort" id="">
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Frequently used</option>
                <option value="">Rarely used</option>
            </select>
            <button>Add new label</button>

            <StyledTable>
                {[...props.counter.entries()].map(([id, counts], index) => {
                    return (
                        <SingleLabel
                            key={index} //
                            index={index + 1}
                            amountOfTasks={counts}
                            labelID={id}
                            urgentMode={false}
                        />
                    );
                })}
            </StyledTable>
        </>
    );
};

export default EditLabels;
