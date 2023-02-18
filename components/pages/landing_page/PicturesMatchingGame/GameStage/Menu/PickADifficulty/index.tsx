// Tools
import { options } from "./options";
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { Difficulty } from "@/@types/pages/PicturesMatchingGame";
import type { FunctionComponent } from "react";
// Material UI Components
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Styled components
const StyledSelect = styled(Select)(({ theme }) => ({
    width: "240px",
    fontSize: "16px",
    animation: `${fadeSimple} .3s .4s both linear`,
    "@media (max-width:500px)": {
        width: "100%",
    },
}));

interface PickADifficultyProps {
    difficulty: Difficulty;
    setDifficulty: (value: Difficulty) => void;
}

const PickADifficulty: FunctionComponent<PickADifficultyProps> = (props) => {
    return (
        <StyledSelect
            onChange={(e) => props.setDifficulty(e.target.value as any)} //
            value={props.difficulty}
            MenuProps={{}}
        >
            {options.map((item) => {
                return (
                    <MenuItem value={item.type} key={item.type}>
                        {item.label}
                    </MenuItem>
                );
            })}
        </StyledSelect>
    );
};

export default PickADifficulty;
