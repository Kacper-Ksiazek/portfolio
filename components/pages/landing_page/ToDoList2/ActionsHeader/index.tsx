// Tools
import { useMemo } from "react";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useContentVisibility } from "./hooks/useContentVisibility";
// Types
import type { FunctionComponent } from "react";
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";
// Other components
import Content from "./Content";
import Navigation from "./Navigation";
import HideButton from "./HideButton";
// Styled components
import { SectionWrapper } from "landing_page/ToDoList2/atoms";

const ActionsHeader: FunctionComponent = () => {
    const { value: stage, setValue: setStage, isChanging: isStageChanging } = useDelayedState<ActionHeaderSection>("PROGRESS_TRACKER", 160);

    const { contentVisibility, toggleContentVisibility } = useContentVisibility();

    const maxHeight: `${string}px` = useMemo<`${string}px`>(() => {
        if (contentVisibility.contentIsHidden) return "64px";
        else if (stage === "EDIT_LABELS") return "400px";
        return "256px";
    }, [contentVisibility.contentIsHidden, stage]);

    async function onNavigationButtonClick() {
        if (contentVisibility.contentIsHidden === true) {
            if (contentVisibility.renderContent === true) return;

            toggleContentVisibility();

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(1);
                }, 180);
            });
        }
    }

    return (
        <SectionWrapper
            sx={{
                height: "400px",
                maxHeight: maxHeight,
                display: "flex",
                flexDirection: "column",
                transition: "max-height .3s",
                overflow: "hidden",
            }}
        >
            <Navigation
                currentStage={stage} //
                updateCurrentStage={setStage}
                beforeOnClick={onNavigationButtonClick}
            >
                <HideButton
                    {...contentVisibility} //
                    toggleContentVisibility={toggleContentVisibility}
                />
            </Navigation>

            {contentVisibility.renderContent && (
                <Content
                    currentStage={stage} //
                    isStageChanging={isStageChanging}
                    foldActionsHeaderPanel={toggleContentVisibility}
                />
            )}
        </SectionWrapper>
    );
};

export default ActionsHeader;
