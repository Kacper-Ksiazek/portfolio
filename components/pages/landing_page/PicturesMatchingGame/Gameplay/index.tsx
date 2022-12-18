// Tools
import { usePicturesMatchingGameContext } from "../hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePicture from "./SinglePicture";
import GameplayWrapper from "./GameplayWrapper";
import SurrenderButton from "./SurrenderButton";

const Gameplay: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <>
            <GameplayWrapper className={context.difficulty} id="picture-matching-game-pictures-wrapper">
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
            <SurrenderButton exitCurrentGameplay={context.closeCurrentGame} />
        </>
    );
};

export default Gameplay;
