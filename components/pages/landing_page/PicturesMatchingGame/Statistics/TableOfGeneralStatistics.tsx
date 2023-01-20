// Tools
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
        <TableWrapper>
            <StyledTable>
                <thead>
                    <th>Difficulty</th>
                    <th>Games</th>
                    <th>Win rate</th>
                    <th>avg. Time</th>
                    <th>avg. Accuracy</th>
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
