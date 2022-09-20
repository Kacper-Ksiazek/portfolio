// Tools
import { useEffect, useState } from "react";
import usePicturesMatchingGameContext from "../hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
import YouWonCommuniqueBase from "./YouWonCommuniqueBase";
import StyledButton from "@/components/atoms/forms/StyledButton";

const YouWonCommunique: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const [winsInTotal, setWinsInTotal] = useState<number>(0);
    const [displayOutroAnimation, setDisplayOutroAnimation] = useState<boolean>(false);
    const context = usePicturesMatchingGameContext();

    const onClick = () => {
        setDisplayOutroAnimation(true);
        setTimeout(() => {
            context.startNewGame();
        }, 1100);
    };

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (!isMounted) return;
            const gamesWonSoFar = localStorage.getItem("PICTURE_MATCHING_GAMES_WON_SO_FAR");
            if (gamesWonSoFar !== undefined) {
                const winsInTotal = Number(gamesWonSoFar as any) + 1;
                localStorage.setItem("PICTURE_MATCHING_GAMES_WON_SO_FAR", String(winsInTotal));
                setWinsInTotal(winsInTotal);
            } else {
                setWinsInTotal(1);
            }
        }, 100);
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <YouWonCommuniqueBase className={displayOutroAnimation ? "outro" : "intro"}>
            <h3>You win!</h3>
            <p>
                It tooks you <strong>{context.numberOfTurns}</strong> moves to end this round
            </p>
            <p>
                You have <strong>{winsInTotal}</strong> wins in total!
            </p>
            <StyledButton onClick={onClick} color="primary">
                Play again
            </StyledButton>
        </YouWonCommuniqueBase>
    );
};

export default YouWonCommunique;
