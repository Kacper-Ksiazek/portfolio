// Tools
import { useEditModeContext } from "../hooks/useEditModeContext";
import { useModeHasRecentlyChanged } from "./hooks/useModeHasRecentlyChanged";
import { CSS_REFERENCES } from "landing_page/ToDoList2/TasksList/SingleTask/css_references";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types";
// Other components
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import MobileEditModeModal from "./MobileEditModeModal";
// Styled components
import Wrapper from "./Wrapper";

interface ContentProps {
    data: Task;
}

const Content: FunctionComponent<ContentProps> = (props) => {
    const { isOpened: editModeIsOpened, isChanging: editModeIsChanging, applyMobileEditMode } = useEditModeContext();

    const modeHasRecentlyChanged: boolean = useModeHasRecentlyChanged(editModeIsChanging, applyMobileEditMode);

    // Render's conditions:
    const renderViewMode: boolean = applyMobileEditMode === true || editModeIsOpened === false;
    const renderEditMode: boolean = applyMobileEditMode === false && editModeIsOpened === true;
    const renderMobileEditMode: boolean = applyMobileEditMode === true && editModeIsOpened === true;

    return (
        <Wrapper
            isUrgent={props.data.urgent} //
            isChanging={editModeIsChanging && applyMobileEditMode === false}
            editModeIsOpened={editModeIsOpened && applyMobileEditMode === false}
            modeHasRecentlyChanged={modeHasRecentlyChanged}
            className={CSS_REFERENCES.CONTENT.MAIN_CONTENT_WRAPPER}
        >
            {renderViewMode && <ViewMode data={props.data} />}
            {renderEditMode && <EditMode />}
            {renderMobileEditMode && <MobileEditModeModal />}
        </Wrapper>
    );
};

export default Content;
