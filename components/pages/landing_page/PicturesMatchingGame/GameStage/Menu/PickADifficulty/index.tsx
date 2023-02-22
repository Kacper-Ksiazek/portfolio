// Tools
import { options } from "./options";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";
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
    ...(theme.palette.mode === "light" && {
        background: theme.palette.background.default,
    }),
}));

interface PickADifficultyProps {
    difficulty: Difficulty;
    setDifficulty: (value: Difficulty) => void;
}

const PickADifficulty: FunctionComponent<PickADifficultyProps> = (props) => {
    const theme = useTheme();

    return (
        <StyledSelect
            onChange={(e) => props.setDifficulty(e.target.value as any)} //
            value={props.difficulty}
            MenuProps={
                theme.palette.mode === "light"
                    ? {
                          sx: {
                              ".MuiList-root": {
                                  background: "#fff",
                              },
                          },
                      }
                    : {}
            }
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
