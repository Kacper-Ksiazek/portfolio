// Tools
import { styled, alpha } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import { SmoothlyAppearingSectionBase } from "./SmoothlyAppearingSection";
// Material UI Icons
import StarBorderOutlined from "@mui/icons-material/StarHalfOutlined";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import { Difficulty } from "@/@types/pages/PicturesMatchingGame";

const SummaryBase = styled(SmoothlyAppearingSectionBase)(({ theme }) => ({
    "strong.primary": {
        background: theme.palette.primary.main,
        padding: "0px 8px",
        borderRadius: "3px",
    },
    h4: {
        animation: `${fadeSimple} .3s .5s both`,
        margin: "48px 0 24px 0",
    },
    p: {
        animation: `${fadeSimple} .3s .6s both`,
        fontSize: "20px",
        margin: 0,
        "&.bottom": {
            marginTop: "32px",
        },
    },
    ul: {
        margin: "8px 0 16px 0",
        listStyleType: "none",
        li: {
            "&:not(&:nth-of-type(1))": {
                marginTop: "8px",
            },
            textAlign: "center",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            animation: `${fadeSimple} .3s 1s both`,
            "span.label": {
                marginRight: "12px",
            },
        },
    },
    "svg#background-svg": {
        fontSize: "32rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: alpha("#fff", 0.05),
        animation: `${fadeSimple} .3s 2s both linear`,
    },
}));

const ButtonsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "24px 0 16px 0",
    button: {
        padding: "6px 24px",
        fontSize: "20px",
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s 1.2s both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s 1.3s both`,
        },
    },
}));

const Summary: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();
    const accurancy = Math.round(((context.gameplay.moves.inTotal - context.gameplay.moves.mistakes) * 100) / context.gameplay.moves.inTotal);

    const { minutes, seconds } = context.gameplay.time;

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
            <Typography variant="h4">Congratulations!</Typography>
            <p>
                You have managed to complete a minigame on <strong className="primary">{context.difficulty}</strong> difficulty mode.
            </p>

            <ul>
                <li className="duration">
                    <span className="label">Duration:</span>
                    <strong className="primary">
                        {minutes}min {seconds}sec
                    </strong>
                </li>

                <li className="accurancy">
                    <span className="label">Accurancy:</span>
                    <strong className="primary">{accurancy}%</strong>
                </li>
            </ul>

            <p className="bottom">Now you can either go back to the difficulty selection stage, or keep playing {context.difficulty !== "INSANE" ? "on a higher difficulty" : ""}</p>

            <ButtonsWrapper>
                <StyledButton onClick={context.navigation.closeSummary}>Return</StyledButton>
                <StyledButton onClick={keepPlaying} color="primary">
                    Keep playing
                </StyledButton>
            </ButtonsWrapper>
        </SummaryBase>
    );
};

export default Summary;
