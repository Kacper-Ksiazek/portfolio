// Tools
import { useDelayedState } from "@/hooks/useDelayedState";
// Types
import type { Stage } from "./@types";
import type { FunctionComponent } from "react";
// Other components
import Content from "./Content";
import Navigation from "./Navigation";
// Styled components
import { SectionWrapper } from "landing_page/ToDoList2/atoms";

interface ActionsHeaderProps {
    //
}

const ActionsHeader: FunctionComponent<ActionsHeaderProps> = (props) => {
    const { value: stage, setValue: setStage, isChanging: isStageChanging } = useDelayedState<Stage>("PROGRESS_TRACKER", 160);

    return (
        <SectionWrapper sx={{ minHeight: "232px" }}>
            <Navigation
                currentStage={stage} //
                updateCurrentStage={setStage}
            />

            <Content currentStage={stage} isStageChanging={isStageChanging} />
        </SectionWrapper>
    );
};

export default ActionsHeader;
