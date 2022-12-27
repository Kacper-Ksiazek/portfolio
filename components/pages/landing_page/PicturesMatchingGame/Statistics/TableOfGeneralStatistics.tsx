// Tools
// Types
import type { FunctionComponent } from "react";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Styled components
import { StyledTable } from "./styled_components";

interface TableOfStatisticsProps {
    statistics: GamesHistoryRecord[];
}

const TableOfStatistics: FunctionComponent<TableOfStatisticsProps> = (props) => {
    return (
        <StyledTable>
            <thead>
                <th>Difficulty</th>
                <th>Games</th>
                <th>Win rate</th>
                <th>Avg time</th>
            </thead>
            <tbody>
                {props.statistics.slice(0, 5).map((item, index) => {
                    return (
                        <tr key={item.index}>
                            <td>{item.index}</td>
                            <td>
                                <strong>{item.difficulty}</strong>
                            </td>
                            <td>{`${item.duration.minutes}min ${item.duration.seconds}sec`}</td>
                            <td>{item.date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </StyledTable>
    );
};

export default TableOfStatistics;
