// Tools
// Types
import type { FunctionComponent } from "react";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Material UI Components
import Typography from "@mui/material/Typography";
// Other components
import TableOfGamesHistory from "./TableOfGamesHistory";
import TableOfGeneralStatistics from "./TableOfGeneralStatistics";
import SmoothlyAppearingSection from "../SmoothlyAppearingSection";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface StatisticsProps {
    //
}

const Statistics: FunctionComponent<StatisticsProps> = (props) => {
    return (
        <SmoothlyAppearingSection>
            <Typography variant="h4" sx={{ m: "0px 0 32px 0" }}>
                General Statistics
            </Typography>
            <TableOfGeneralStatistics statistics={data} />

            <Typography variant="h4" sx={{ m: "64px 0 32px 0" }}>
                Games History
            </Typography>
            <TableOfGamesHistory history={data} />

            <StyledButton className="navigation" sx={{ mt: "32px" }}>
                Return
            </StyledButton>
        </SmoothlyAppearingSection>
    );
};

export default Statistics;

const data: GamesHistoryRecord[] = [
    {
        index: 1,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 2,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 3,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 4,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 3,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 4,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 3,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 4,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 3,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
    {
        index: 4,
        accurancy: 65,
        date: "25.12.2022",
        difficulty: "EASY",
        duration: {
            minutes: 0,
            seconds: 3,
        },
    },
];
