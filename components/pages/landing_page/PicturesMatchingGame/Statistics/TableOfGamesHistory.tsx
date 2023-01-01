// Tools
import { createPortal } from "react-dom";
import { formatTime } from "@/utils/client/formatTime";
// Types
import type { FunctionComponent } from "react";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Other components
import PaginatedStaticContent from "@/components/utils/PaginatedStaticContent";
// Styled components
import { StyledTable } from "./styled_components";

interface TableOfGamesHistoryProps {
    data: GamesHistoryRecord[];
}

const TableOfGamesHistory: FunctionComponent<TableOfGamesHistoryProps> = (props) => {
    return (
        <>
            <StyledTable id="pictures-matching-game-games-history-table">
                <thead>
                    <th>Index</th>
                    <th>Difficulty</th>
                    <th>Result</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Accuracy</th>
                </thead>

                <tbody />
            </StyledTable>

            <PaginatedStaticContent
                data={props.data}
                perPage={6}
                renderItem={(item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.index}</td>
                            <td>
                                <strong>{item.difficulty}</strong>
                            </td>
                            <td className={item.won ? "win" : "lost"}>{item.won ? "WIN" : "LOST"}</td>
                            <td>
                                {formatTime({
                                    time: {
                                        seconds: item.duration,
                                    },
                                    outputType: "SHORT",
                                })}
                            </td>
                            <td>{item.date}</td>
                            <td>
                                <strong>{item.accuracy}%</strong>
                            </td>
                        </tr>
                    );
                }}
                renderWrapper={(content) => {
                    const DOMRoot = document.querySelector("#pictures-matching-game-games-history-table>tbody");
                    return createPortal(content, DOMRoot as HTMLElement);
                }}
            />
        </>
    );
};

export default TableOfGamesHistory;
