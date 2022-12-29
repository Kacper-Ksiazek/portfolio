// Tools
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

interface StatisticsProps {
    history: Statistics["history"];
    general: Statistics["general"];
}

const Statistics: FunctionComponent<StatisticsProps> = (props) => {
    return (
        <SmoothlyAppearingSection>
            <Typography variant="h4" sx={{ m: "0px 0 32px 0" }}>
                General Statistics
            </Typography>
            <TableOfGeneralStatistics data={props.general} />

            <Typography variant="h4" sx={{ m: "64px 0 32px 0" }}>
                Games History
            </Typography>
            <TableOfGamesHistory data={props.history} />

            <StyledButton className="navigation" sx={{ mt: "32px" }}>
                Return
            </StyledButton>
        </SmoothlyAppearingSection>
    );
};

export default Statistics;
