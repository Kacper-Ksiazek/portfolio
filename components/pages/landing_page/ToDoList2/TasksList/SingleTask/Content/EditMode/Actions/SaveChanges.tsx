// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledButton from "components/atoms/forms/StyledButton";

const SaveChanges: FunctionComponent = () => {
    const { saveAndExit } = useEditModeContext();

    return (
        <span>
            <StyledButton onClick={saveAndExit} componentThemeID="SUCCESS">
                <span>Save changes</span>
            </StyledButton>
        </span>
    );
};

export default SaveChanges;
