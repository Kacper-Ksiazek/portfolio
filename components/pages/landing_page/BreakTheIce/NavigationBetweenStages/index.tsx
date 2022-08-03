// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { StatedDataField } from "@/@types/StatedDataField";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Styled components
import Divider from "./Divider";
import SingleNavigationStep from "./SingleNavigationStep";

const NavigationStagesWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    ".step-wrapper": {
        display: "flex",
        alignItems: "center",
    },
    ["@media (max-width:600px)"]: {
        flexDirection: "column",
        ".divider": {
            display: "none",
        },
        ".step-wrapper": {
            width: "100%",
            marginTop: "8px",
            ".single-navigation-button": {
                border: `2px solid #E5E5E5`,
                width: "100%",
                "&.selected": {
                    border: `2px solid ${theme.palette.primary.main}`,
                },
            },
        },
    },
}));

interface NavigationBetweenStagesProps {
    stage: StatedDataField<IceBreakingStage>;
}

const NavigationBetweenStages: FunctionComponent<NavigationBetweenStagesProps> = (props) => {
    const stages: IceBreakingStage[] = ["General", "Competences", "Education", "Hobbies"];

    return (
        <NavigationStagesWrapper>
            {stages.map((item, index) => {
                return (
                    <div key={item} className="step-wrapper">
                        {index ? <Divider className="divider" /> : <span />}
                        <SingleNavigationStep
                            className={`single-navigation-button ${props.stage.value === item ? "selected" : ""}`} //
                            onClick={() => props.stage.setValue(item)}
                        >
                            <span className="text" onClick={() => props.stage.setValue(item)}>
                                {item}
                            </span>
                        </SingleNavigationStep>
                    </div>
                );
            })}
        </NavigationStagesWrapper>
    );
};

export default NavigationBetweenStages;
