// Tools
import { useEditModeContext } from "../hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
// Other components
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
// Styled components
import Wrapper from "./Wrapper";

interface ContentProps {
    data: Task;
}

const Content: FunctionComponent<ContentProps> = (props) => {
    const editModeContext = useEditModeContext();

    return (
        <Wrapper
            isUrgent={props.data.urgent} //
            isClosing={editModeContext.isClosing}
            editModeIsOpened={editModeContext.isOpened}
        >
            {editModeContext.isOpened ? <EditMode /> : <ViewMode data={props.data} />}
            {/*  */}
        </Wrapper>
    );
};

export default Content;
