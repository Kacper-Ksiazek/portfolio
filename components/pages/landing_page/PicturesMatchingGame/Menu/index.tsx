// Tools
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Other components
import PickADifficulty from "./PickADifficulty";
import StyledButton from "@/components/atoms/forms/StyledButton";
import SmoothlyAppearingSection from "../SmoothlyAppearingSection";
// Material UI Icons
import NavigateNext from "@mui/icons-material/NavigateNext";

const Menu: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <SmoothlyAppearingSection>
            <Typography variant="h4" sx={{ mt: 0, mb: "16px", fontSize: "22px" }}>
                Pick a difficulty and start a game
            </Typography>

            <PickADifficulty difficulty={context.difficulty} setDifficulty={context.methods.setDifficulty} />

            <Box sx={{ display: "flex", mt: "32px" }}>
                <StyledButton
                    className="navigation" //
                    onClick={() => context.navigation.openGamesHistory()}
                >
                    Games history
                </StyledButton>

                <StyledButton
                    color="primary"
                    className="navigation" //
                    onClick={() => context.navigation.startNewGame(context.difficulty)}
                >
                    <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
                        Start <NavigateNext />
                    </Box>
                </StyledButton>
            </Box>
        </SmoothlyAppearingSection>
    );
};

export default Menu;
