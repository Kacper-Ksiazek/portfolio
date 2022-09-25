// Tools
import { useMinigameContext } from "@/components/pages/landing_page/IntroductionScreen/hooks/useMinigameContext";
// Types
import type { FunctionComponent } from "react";
import type { Gender } from "@/components/pages/landing_page/IntroductionScreen/context/MinigameContext";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import SingleGenderCard from "./SingleGenderCard";
import GenderPickingBase from "./GenderPickingBase";

interface GenderPickingProps {
    outro: boolean;
}

const GenderPicking: FunctionComponent<GenderPickingProps> = (props) => {
    const { changeMinigameStage, pickGender } = useMinigameContext();

    const selectGender = (gender: Gender) => {
        pickGender(gender);
        changeMinigameStage("THROPHY_COLLECTING");
    };

    return (
        <GenderPickingBase className={props.outro ? "outro" : ""}>
            <h3>One more thing to go</h3>
            <p>
                Please select the gender which you identify with the most or skip this step if it overwhelmes you. <strong>I choose</strong>
            </p>
            <div className="simple-flexbox">
                <SingleGenderCard gender="male" onClick={() => selectGender("MALE")} />
                <SingleGenderCard gender="female" onClick={() => selectGender("FEMALE")} />
            </div>

            <StyledButton
                color="secondary" //
                className="prefer-not-to-answer"
                onClick={() => selectGender("OTHER")}
            >{`I prefer not to answer`}</StyledButton>

            <i>
                <strong>{`Don't worry! `}</strong>
                <span>I will not store this information anywhere, frankly speaking I do not even care about it at all, it is all for the sake of the further step.</span>
            </i>
        </GenderPickingBase>
    );
};

export default GenderPicking;
