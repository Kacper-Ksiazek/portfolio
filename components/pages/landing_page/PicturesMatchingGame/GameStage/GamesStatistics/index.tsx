// Tools
import { requstDOMNode } from "@/components/pages/landing_page/PicturesMatchingGame/utils/getDOMNode";
// Types
import type { FunctionComponent } from "react";
import type { Statistics } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import TableOfGamesHistory from "./TableOfGamesHistory";
import TableOfGeneralStatistics from "./TableOfGeneralStatistics";
import SmoothlyAppearingSection from "../SmoothlyAppearingSection";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface GamesStatisticsProps {
    history: Statistics["history"];
    general: Statistics["general"];
    goBack: () => void;
}

const GamesStatistics: FunctionComponent<GamesStatisticsProps> = (params) => {
    const close = () => {
        requstDOMNode("MAIN_WRAPPER").scrollIntoView({
            behavior: "smooth",
        });
        setTimeout(params.goBack, 580);
    };

    return (
        <SmoothlyAppearingSection>
            <Typography variant="h4" sx={{ m: "0px 0 32px 0" }}>
                General Statistics
            </Typography>
            <TableOfGeneralStatistics data={params.general} />

            <Typography variant="h4" sx={{ m: "64px 0 32px 0" }}>
                Games History
            </Typography>
            <TableOfGamesHistory data={params.history} />

            <StyledButton className="navigation" sx={{ mt: "32px" }} onClick={close}>
                Return
            </StyledButton>
        </SmoothlyAppearingSection>
    );
};

export default GamesStatistics;
