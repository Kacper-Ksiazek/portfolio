// Tools
import { usePicturesMatchingGameContext } from "./hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
import type { Difficulty } from "@/@types/pages/PicturesMatchingGame";
// Other components
import SmoothlyAppearingSection from "./SmoothlyAppearingSection";

interface Option {
    type: Difficulty;
    label: string;
}

const PickADifficulty: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    const options: Option[] = [
        {
            type: "EASY",
            label: "Easy- 4 images",
        },
        {
            type: "MEDIUM",
            label: "Medium- 6 images",
        },
        {
            type: "HARD",
            label: "Hard- 12 images",
        },
        {
            type: "INSANE",
            label: "Insane- 20 images",
        },
    ];

    return (
        <SmoothlyAppearingSection>
            <h1>pick a difficulty</h1>
            <select onChange={(e) => context.setDifficulty(e.target.value as any)} value={context.difficulty}>
                {options.map((item, index) => {
                    return (
                        <option value={item.type} key={item.type}>
                            {item.label}
                        </option>
                    );
                })}
            </select>

            <button onClick={context.navigation.startNewGame}>Begin</button>
        </SmoothlyAppearingSection>
    );
};

export default PickADifficulty;
