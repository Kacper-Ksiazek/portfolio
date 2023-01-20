// Tools
import { reducer } from "./reducer";
import usePagination from "@mui/material/usePagination";
import { renderNTimes } from "@/utils/client/renderNTimes";
import { useReducer, useRef, useEffect, useState } from "react";
// Types
import type { ReactNode, ReactElement } from "react";
import type { PaginatedStaticContentReducerState } from "./reducer";
// Material UI Components
import PaginationItem from "./PaginationItem";
// Styled components
import { PaginationWrapper } from "./styled_components";

type UniqueKey = string | number;
interface PaginatedStaticContentProps<T> {
    perPage: number;
    data: T[];

    renderGhostRecord?: (index: number) => ReactNode;
    renderItem: (item: T, key: UniqueKey) => ReactNode;
    keyResolver?: (item: T, index: number) => UniqueKey;
    renderWrapper: (content: ReactNode) => ReactElement;
}

const PaginatedStaticContent = <T extends unknown>(props: PaginatedStaticContentProps<T>): ReactElement => {
    const contentHasBeenDisplayed = useRef<boolean>(true);
    const [displayContent, setDisplayContent] = useState<boolean>(false);

    const [state, dispatch] = useReducer(reducer, {
        perPage: props.perPage,
        currentPage: 1,
        pagesInTotal: Math.ceil(props.data.length / props.perPage),
    } as PaginatedStaticContentReducerState);

    const { items: paginationItems } = usePagination({
        page: state.currentPage,
        count: state.pagesInTotal,
        siblingCount: 0,
    });

    const start: number = (state.currentPage - 1) * state.perPage;
    const stop: number = state.currentPage * state.perPage;

    const recordsOnCurrentPage = props.data.slice(start, stop);

    useEffect(() => {
        if (contentHasBeenDisplayed.current) {
            setTimeout(() => {
                contentHasBeenDisplayed.current = true;
                setDisplayContent(true);
            }, 10);
        }
    });

    if (!displayContent) return <>Loading...</>;
    return (
        <>
            {props.renderWrapper(
                <>
                    {/* Display all games records on current page */}
                    {recordsOnCurrentPage.map((item, index) => {
                        return props.renderItem(item, props.keyResolver ? props.keyResolver(item, index) : index);
                    })}
                    {/* Fill the gap with ghost records */}
                    {(() => {
                        if (props.renderGhostRecord && recordsOnCurrentPage.length !== state.perPage) {
                            return renderNTimes({
                                n: state.perPage - recordsOnCurrentPage.length,
                                renderElement: props.renderGhostRecord,
                            });
                        }
                    })()}
                </>
            )}

            <PaginationWrapper>
                {paginationItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <PaginationItem dispatch={dispatch} item={item} state={state} />
                        </li>
                    );
                })}
            </PaginationWrapper>
        </>
    );
};

export default PaginatedStaticContent;
