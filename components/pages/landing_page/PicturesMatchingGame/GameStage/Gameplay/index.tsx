// Tools
import { useEffect } from "react";
import dynamic from "next/dynamic";
import useWindowSizes from "@/hooks/useWindowSizes";
import { requstDOMNode } from "@/components/pages/landing_page/PicturesMatchingGame/utils/getDOMNode";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
const Clock = dynamic(() => import("./Clock"));
import SinglePicture from "./SinglePicture";
import GameplayWrapper from "./GameplayWrapper";
import SurrenderButton from "./SurrenderButton";
import { ButtonsWrapper, StyledButton } from "./styled_components";
// Other components
import SectionHeader from "../atoms/SectionHeader";

const Gameplay: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    const { width } = useWindowSizes();

    useEffect(() => {
        requstDOMNode("MAIN_WRAPPER").classList.add("visible");
    }, []);

    return (
        <>
            <SectionHeader sx={{ mb: "32px" }}>
                Find all <strong>{context.gameplay.pictures.length / 2} pairs</strong> of matching pictures
            </SectionHeader>

            <GameplayWrapper
                id="picture-matching-game-pictures-wrapper" //
                className={[
                    context.difficulty, //
                    context.gameplay.isExiting ? "exiting" : "",
                ].join(" ")}
            >
                <span
                    id="picture-matching-game-pictures-wrapper-user-scroll-anchor"
                    style={{
                        position: "absolute",
                        width: "0px",
                        height: "0px",
                        zIndex: "20",
                        left: "calc(50% - 5px)",
                        top: "-70px",
                    }}
                />

                {context.gameplay.pictures.map((picture, index) => {
                    return (
                        <SinglePicture
                            key={picture.id} //
                            data={picture}
                            introAnimaton={context.gameplay.animation === "INTRO"}
                            onClick={() => {
                                if (!picture.isMatched) context.methods.handlePictureOnClick(picture);
                                else context.methods.setPictureToDisplayInFullsize(picture);
                            }}
                        />
                    );
                })}
            </GameplayWrapper>

            <Clock limitContent={width < 1350} />

            <ButtonsWrapper id="picture-matching-game-buttons-wrapper">
                <SurrenderButton
                    exitCurrentGameplay={context.navigation.exitCurrentGameplay} //
                    disabled={context.gameplay.isOver}
                />

                <StyledButton
                    componentThemeID="SUCCESS" //
                    className="navigation"
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
