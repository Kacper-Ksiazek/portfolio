// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledButton from "components/atoms/forms/StyledButton";

const Discard: FunctionComponent = (props) => {
    const { toggleIsOpened } = useEditModeContext();

    return (
        <span>
            <StyledButton onClick={toggleIsOpened} componentThemeID="ERROR">
                <span>Discard</span>
            </StyledButton>
        </span>
    );
};

export default Discard;
