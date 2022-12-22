// Tools
import { usePicturesMatchingGameContext } from "../hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
import GameplayWrapper from "./GameplayWrapper";
import SurrenderButton from "./SurrenderButton";
import { ButtonsWrapper, StyledButton } from "./styled_components";

const Gameplay: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <>
            <GameplayWrapper
                id="picture-matching-game-pictures-wrapper" //
                className={[
                    context.difficulty, //
                    context.gameplay.isExiting ? "exiting" : "",
                ].join(" ")}
            >
                {context.gameplay.pictures.map((picture, index) => {
                    return (
                        <SinglePicture
                            key={picture.id} //
                            data={picture}
                            introAnimaton={context.gameplay.animation === "INTRO"}
                            onClick={() => {
                                if (!picture.isMatched) context.handlePictureOnClick(picture);
                                else context.setPictureToDisplayInFullsize(picture);
                            }}
                        />
                    );
                })}
            </GameplayWrapper>

            <ButtonsWrapper id="picture-matching-game-buttons-wrapper">
                <SurrenderButton
                    exitCurrentGameplay={context.navigation.exitCurrentGameplay} //
                    disabled={context.gameplay.isOver}
                />

                <StyledButton
                    color="success" //
                    disabled={!context.gameplay.isOver}
                    onClick={context.navigation.continueToTheGameSummary}
                >
                    Continue
                </StyledButton>
            </ButtonsWrapper>
        </>
    );
};

export default Gameplay;
