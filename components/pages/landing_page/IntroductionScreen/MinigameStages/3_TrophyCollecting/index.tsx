// Tools
import { useMinigameContext } from "../../hooks/useMinigameContext";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { WayOfRendering } from "@/components/pages/landing_page/IntroductionScreen/@types";
// Material UI Icons
import ArrowBack from "@mui/icons-material/ArrowBack";
// Other components
import PodiumPlace from "./PodiumPlace";
import SilverTrophy from "./cups/SilverTrophy";
import BronzeTrophy from "./cups/BronzeTrophy";
import GoldenTrophy from "./cups/GoldenTrophy";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import TrophyCollectingBase from "./TrophyCollectingBase";

const Trophy: FunctionComponent<{ rendering: WayOfRendering }> = (props) => {
    const { changeMinigameStage, selectedGender } = useMinigameContext();

    const goBack = () => {
        changeMinigameStage("INITIAL");
    };

    const winnerTitle: string = (() => {
        if (selectedGender === null || selectedGender === "OTHER") return "";

        return `*${selectedGender === "MALE" ? "King*" : "Queen* and a🌹 likewise"}`;
    })();

    return (
        <TrophyCollectingBase
            rendering={props.rendering}
            addPaddingTop
            header={{
                main: "Congratulations",
                addition: "You have managed to complete a hidden minigame",
            }}
        >
            <div className="podium">
                <PodiumPlace place="silver">
                    <SilverTrophy />
                </PodiumPlace>
                <PodiumPlace place="gold">
                    <GoldenTrophy />
                </PodiumPlace>
                <PodiumPlace place="bronze">
                    <BronzeTrophy />
                </PodiumPlace>
            </div>

            <p className="message-to-winner">{formatTextViaBolding(`Here is your deserved trophy ${winnerTitle}!`, true)}</p>
            <StyledButton
                className="go-back" //
                componentThemeID="PRIMARY"
                onClick={goBack}
            >
                <ArrowBack />
                <span>Go back</span>
            </StyledButton>
        </TrophyCollectingBase>
    );
};

export default Trophy;
