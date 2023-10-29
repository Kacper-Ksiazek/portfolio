// Tools
import { useLetterToDisplay } from "./hooks/useLetterToDisplay";
// Types
import type { Styles } from "@/@types/MUI";
import type { FunctionComponent } from "react";
// Styled components
import BackgroundLetterBase from "./Base";

interface BackgroundLetterProps {
    letter: string;
    sx: Styles;
}

const BackgroundLetter: FunctionComponent<BackgroundLetterProps> = (props) => {
    const { animation, letter } = useLetterToDisplay(props.letter);

    return (
        <BackgroundLetterBase
            sx={props.sx} //
            className={animation ?? ""}
        >
            {letter}
        </BackgroundLetterBase>
    );
};

export default BackgroundLetter;
