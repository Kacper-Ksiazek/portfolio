// Tools
import { useEditModeContext, useValidationResultContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledButton from "components/atoms/forms/StyledButton";

const SaveChanges: FunctionComponent = () => {
    const { saveAndExit } = useEditModeContext();
    const { everythingIsValid, someChangesHaveBeenMade } = useValidationResultContext();

    return (
        <span>
            <StyledButton
                disabled={!everythingIsValid || !someChangesHaveBeenMade}
                onClick={saveAndExit} //
                componentThemeID="SUCCESS"
            >
                <span>Save changes</span>
            </StyledButton>
        </span>
    );
};

export default SaveChanges;
