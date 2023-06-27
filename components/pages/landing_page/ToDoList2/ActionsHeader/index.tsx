// Tools
import { useDelayedState } from "@/hooks/useDelayedState";
import { useContentVisibility, useResponsiveHeight } from "./hooks";
// Types
import type { FunctionComponent } from "react";
import type { ActionHeaderSection } from "landing_page/ToDoList2/@types";
import type { ResponsiveHeightCSSClass } from "./hooks/useResponsiveHeight";
// Other components
import Content from "./Content";
import Navigation from "./Navigation";
import HideButton from "./HideButton";
// Styled components
import ActionsHeaderBase from "./Base";

const ActionsHeader: FunctionComponent = () => {
    const { value: stage, setValue: setStage, isChanging: isStageChanging } = useDelayedState<ActionHeaderSection>("PROGRESS_TRACKER", 160);

    const { contentVisibility, toggleContentVisibility } = useContentVisibility();

    const responsiveHeightCSSClass: ResponsiveHeightCSSClass = useResponsiveHeight(stage, contentVisibility.contentIsHidden);

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
        <ActionsHeaderBase className={responsiveHeightCSSClass}>
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
        </ActionsHeaderBase>
    );
};

export default ActionsHeader;
