// Tools
import { formatTime } from "@/utils/client/formatTime";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Typography from "@mui/material/Typography";
// Material UI Icons
import StarBorderOutlined from "@mui/icons-material/StarHalfOutlined";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import { Difficulty } from "@/@types/pages/PicturesMatchingGame";
import { SummaryBase, ButtonsWrapper } from "./styled_components";

const Summary: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();
    const accuracy = Math.round(((context.gameplay.moves.inTotal - context.gameplay.moves.mistakes) * 100) / context.gameplay.moves.inTotal);

    const keepPlaying = () => {
        const nextDifficulty: Record<Difficulty, Difficulty> = {
            EASY: "MEDIUM",
            MEDIUM: "HARD",
            HARD: "INSANE",
            INSANE: "INSANE",
        };

        context.methods.setDifficulty({
            value: nextDifficulty[context.difficulty],
            startNewGameplay: true,
        });
    };

    return (
        <SummaryBase>
            <StarBorderOutlined id="background-svg" />
            <Typography variant="h3">Congratulations!</Typography>
            <p>
                You have managed to complete a minigame on <strong className="primary">{context.difficulty}</strong> difficulty mode.
            </p>

            <ul>
                <li className="duration">
                    <span className="label">Time:</span>
                    <strong className="primary">
                        {formatTime({
                            time: context.gameplay.time,
                            outputType: "SHORT",
                        })}
                    </strong>
                </li>

                <li className="accuracy">
                    <span className="label">Accuracy:</span>
                    <strong className="primary">{accuracy}%</strong>
                </li>
            </ul>

            <p className="bottom">Now you can either go back to the difficulty selection stage, or keep playing {context.difficulty !== "INSANE" ? "on a higher difficulty" : ""}</p>

            <ButtonsWrapper>
                <StyledButton onClick={context.navigation.goBackToMenu}>Return</StyledButton>
                <StyledButton onClick={keepPlaying} color="primary">
                    Keep playing
                </StyledButton>
            </ButtonsWrapper>
        </SummaryBase>
    );
};

export default Summary;
