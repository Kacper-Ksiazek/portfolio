// Tools
import { COLORS } from "material";
import { alpha } from "@mui/material";
import { formatTime } from "@/utils/client/formatTime";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { Statistics } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Styled components
import { StyledTable, TableWrapper } from "./styled_components";

interface TableOfStatisticsProps {
    data: Statistics["general"];
}

const TableOfStatistics: FunctionComponent<TableOfStatisticsProps> = (props) => {
    const formatPercentage = (value: number): ReactNode | "-" => {
        if (isNaN(value)) return "-";
        else if (value === 100) return <strong>100%</strong>;
        else return <strong>{value.toFixed(2)}%</strong>;
    };

    return (
        <TableWrapper className="delay-1">
            <StyledTable
                sx={{
                    "tr:nth-of-type(5)": {
                        background: alpha(COLORS.secondary, 0.3),
                    },
                }}
            >
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>Games</th>
                        <th>Win rate</th>
                        <th>avg. Time</th>
                        <th>avg. Accuracy</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props.data).map(([key, { games, totalTime, totalAccuracy }]) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <strong>{key}</strong>
                                </td>
                                <td>{games.inTotal}</td>
                                <td>{formatPercentage((games.won * 100) / games.inTotal)}</td>
                                <td>
                                    {formatTime({
                                        time: {
                                            seconds: Math.floor(totalTime / games.inTotal),
                                        },
                                        outputType: "SHORT",
                                    })}
                                </td>
                                <td>{formatPercentage(totalAccuracy / games.inTotal)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default TableOfStatistics;
