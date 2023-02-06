// Tools
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";

const NavigationBetweenStages: FunctionComponent = () => {
    const stages: IceBreakingStage[] = ["General", "Competencies", "Education", "Hobbies", "Previous_Jobs"];
    const context = useBreakTheIceContentContext();

    return (
        <NavigationBetweenSections
            sections={stages} //
            onChoose={(val) => context.changeStage(val as IceBreakingStage)}
            currentSection={context.currentIceBreakingStage}
        />
    );
};

export default NavigationBetweenStages;
