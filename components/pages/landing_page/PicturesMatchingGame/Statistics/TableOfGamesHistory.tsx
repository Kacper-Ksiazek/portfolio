// Tools
import { formatTime } from "@/utils/client/formatTime";
// Types
import type { FunctionComponent } from "react";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Styled components
import { StyledTable } from "./styled_components";

interface TableOfGamesHistoryProps {
    data: GamesHistoryRecord[];
}

const TableOfGamesHistory: FunctionComponent<TableOfGamesHistoryProps> = (props) => {
    return (
        <StyledTable>
            <thead>
                <th>Index</th>
                <th>Difficulty</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Accurancy</th>
            </thead>
            <tbody>
                {props.data.reverse().map((item, index) => {
                    return (
                        <tr key={item.index}>
                            <td>{item.index}</td>
                            <td className="colored">
                                <strong>{item.difficulty}</strong>
                            </td>
                            <td>
                                {formatTime({
                                    time: {
                                        seconds: item.duration,
                                    },
                                    outputType: "SHORT",
                                })}
                            </td>
                            {/* <td>{`${item.duration.minutes}min ${item.duration.seconds}sec`}</td> */}
                            <td>{item.date}</td>
                            <td>
                                <strong>{item.accurancy}%</strong>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </StyledTable>
    );
};

export default TableOfGamesHistory;
