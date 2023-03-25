// Types
import type { FunctionComponent } from "react";
import type { UsePaginationItem } from "@mui/material/usePagination";
import type { PaginatedStaticContentReducerState, PaginatedStaticContentReducerAction } from "./reducer";
// Material UI Icons
import NavigateNext from "@mui/icons-material/NavigateNext";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
// Styled components
import { Ellipsis, PaginationStep } from "./styled_components";

interface PaginationItemProps {
    item: UsePaginationItem;
    state: PaginatedStaticContentReducerState;
    dispatch: (value: PaginatedStaticContentReducerAction) => void;
}

const PaginationItem: FunctionComponent<PaginationItemProps> = (props) => {
    const { type, ...item } = props.item;
    const { dispatch, state } = props;

    if (type === "previous") {
        return (
            <PaginationStep
                disabled={state.currentPage === 1} //
                onClick={() => dispatch({ type: "PREVIOUS" })}
                className="previous"
            >
                <NavigateBefore />
            </PaginationStep>
        );
    }
    //
    else if (type === "next") {
        return (
            <PaginationStep
                disabled={state.currentPage === state.pagesInTotal} //
                onClick={() => dispatch({ type: "NEXT" })}
                className="next"
            >
                <NavigateNext />
            </PaginationStep>
        );
    }
    //
    else if (type === "end-ellipsis" || type === "start-ellipsis") {
        return <Ellipsis>...</Ellipsis>;
    }
    //
    else {
        return (
            <PaginationStep
                color={item.page === state.currentPage ? "primary" : "text"}
                className={item.page === state.currentPage ? "unclickable" : ""}
                disabled={item.page === state.currentPage}
                onClick={() => {
                    dispatch({ type: "PARTICULAR", payload: item.page as number });
                }}
            >
                {item.page}
            </PaginationStep>
        );
    }
};

export default PaginationItem;
