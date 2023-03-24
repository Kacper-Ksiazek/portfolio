// Tools
import { useMemo } from "react";
import { createPortal } from "react-dom";
import useWindowSizes from "@/hooks/useWindowSizes";
import { formatTime } from "@/utils/client/formatTime";
import { requstDOMNode } from "@/components/pages/landing_page/PicturesMatchingGame/utils/getDOMNode";
// Types
import type { FunctionComponent } from "react";
import type { GamesHistoryRecord } from "@/@types/pages/PicturesMatchingGame/localStorage";
// Other components
import GhostRecord from "./GhostRecord";
import PaginatedStaticContent from "@/components/utils/PaginatedStaticContent";
// Styled components
import { StyledTable, TableWrapper } from "../styled_components";

interface TableOfGamesHistoryProps {
    data: GamesHistoryRecord[];
}

const TableOfGamesHistory: FunctionComponent<TableOfGamesHistoryProps> = (props) => {
    const amountOfColumns = 6;
    const { height } = useWindowSizes();

    const recordsToDisplay = useMemo<number>(() => {
        if (height > 950) return 10;
        else if (height > 650) return 8;
        return 6;
    }, [height]);

    return (
        <>
            <TableWrapper>
                <StyledTable
                    id="pictures-matching-game-games-history-table"
                    sx={{
                        "th:nth-of-type(4)": {
                            width: "140px",
                        },
                    }}
                >
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Difficulty</th>
                            <th>Result</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                    <tbody />
                </StyledTable>
            </TableWrapper>

            <PaginatedStaticContent
                key={recordsToDisplay}
                data={props.data}
                perPage={recordsToDisplay}
                keyResolver={(item) => item.index}
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
                renderWrapper={(content) => createPortal(content, requstDOMNode("BODY_OF_GAMES_HISTORY_TABLE"))}
                renderGhostRecord={(index) => (
                    <GhostRecord
                        key={index} //
                        amountOfColumns={amountOfColumns}
                    />
                )}
            />
        </>
    );
};

export default TableOfGamesHistory;
