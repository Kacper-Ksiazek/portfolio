// Tools
import { useDelayedState } from "@/hooks/useDelayedState";
// Types
import type { FunctionComponent } from "react";
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";
// Other components
import Content from "./Content";
import Navigation from "./Navigation";
// Styled components
import { SectionWrapper } from "landing_page/ToDoList2/atoms";

const ActionsHeader: FunctionComponent = () => {
    const { value: stage, setValue: setStage, isChanging: isStageChanging } = useDelayedState<ActionHeaderSection>("PROGRESS_TRACKER", 160);

    return (
        <SectionWrapper
            sx={{
                height: "400px",
                maxHeight: stage === "EDIT_LABELS" ? "400px" : "232px", //
                display: "flex",
                flexDirection: "column",
                transition: "max-height .3s",
            }}
        >
            <Navigation
                currentStage={stage} //
                updateCurrentStage={setStage}
            />

            <Content currentStage={stage} isStageChanging={isStageChanging} />
        </SectionWrapper>
    );
};

export default ActionsHeader;
