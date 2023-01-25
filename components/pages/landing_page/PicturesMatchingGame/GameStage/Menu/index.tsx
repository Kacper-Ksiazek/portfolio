// Tools
import { styled } from "@mui/system";
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
// Styled components
const ButtonsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "32px",
    "@media (max-width:500px)": {
        flexDirection: "column-reverse",
        width: "100%",
        button: {
            margin: "10px 0 0 0 !important",
            width: "100%",
        },
    },
}));

const Menu: FunctionComponent = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <SmoothlyAppearingSection>
            <Typography variant="h4" sx={{ mt: 0, mb: "16px", fontSize: "22px", textAlign: "center" }}>
                Pick a difficulty and start a game
            </Typography>

            <PickADifficulty difficulty={context.difficulty} setDifficulty={context.methods.setDifficulty} />

            <ButtonsWrapper>
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
            </ButtonsWrapper>
        </SmoothlyAppearingSection>
    );
};

export default Menu;
