// Tools
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Styled components
import Divider from "./Divider";
import SingleNavigationStep from "./SingleNavigationStep";
import NavigationBetweenStagesBase from "./NavigationBetweenStagesBase";

interface NavigationBetweenStagesProps {
    //
}

const NavigationBetweenStages: FunctionComponent<NavigationBetweenStagesProps> = (props) => {
    const stages: IceBreakingStage[] = ["General", "Competences", "Education", "Hobbies", "Previous_Jobs"];
    const context = useBreakTheIceContentContext();

    return (
        <NavigationBetweenStagesBase>
            {stages.map((item, index) => {
                const stageLabel = item.replaceAll
                    ? item.replaceAll("_", " ")
                    : item
                          .split("")
                          .map((char) => (char === "_" ? " " : char))
                          .join("");

                const onClick = () => context.changeStage(item);

                return (
                    <div key={item} className="step-wrapper">
                        {index ? <Divider className="divider" /> : <span />}
                        <SingleNavigationStep
                            className={[
                                `single-navigation-button`, //
                                context.currentIceBreakingStage === item ? "selected" : "",
                            ].join(" ")} //
                            onClick={onClick}
                        >
                            <span className="text" onClick={onClick}>
                                {stageLabel}
                            </span>
                        </SingleNavigationStep>
                    </div>
                );
            })}
        </NavigationBetweenStagesBase>
    );
};

export default NavigationBetweenStages;
