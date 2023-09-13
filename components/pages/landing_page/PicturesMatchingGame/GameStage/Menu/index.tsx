// Tools
import { styled } from "@mui/material";
import { options } from "./difficulty_options";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Box from "@mui/material/Box";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";
import StyledButton from "@/components/atoms/forms/StyledButton";
import { SmoothlyAppearingSection, SectionHeader } from "../atoms";
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

const Menu: FunctionComponent<{ introAnimationsWithExtraDelay: boolean }> = (props) => {
    const context = usePicturesMatchingGameContext();

    return (
        <SmoothlyAppearingSection className={props.introAnimationsWithExtraDelay ? "extra-delay" : ""}>
            <SectionHeader>Pick a difficulty and start a game</SectionHeader>

            <StyledSelect
                value={context.difficulty} //
                onChange={(e) => context.methods.setDifficulty(e.target.value)}
                className="delay-1"
                options={options}
                sx={{ width: "240px" }}
            />

            <ButtonsWrapper className="bottom-buttons-wrapper">
                <StyledButton
                    className="navigation" //
                    onClick={() => context.navigation.openGamesHistory()}
                    disabled={context.statistics.history.length === 0}
                >
                    Games history
                </StyledButton>

                <StyledButton
                    componentThemeID="PRIMARY"
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
