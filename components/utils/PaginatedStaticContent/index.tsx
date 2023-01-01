// Tools
import { reducer } from "./reducer";
import { styled, alpha } from "@mui/system";
import { renderNTimes } from "@/utils/client/renderNTimes";
import { useReducer, useRef, useEffect, useState } from "react";
// Types
import type { ReactNode, ReactElement } from "react";
import type { PaginatedStaticContentReducerState } from "./reducer";
// Material UI Icons
import NavigateNext from "@mui/icons-material/NavigateNext";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
const PaginationStep = styled(StyledButton)(({ theme }) => ({
    fontSize: "20px",
    width: "42px",
    height: "42px",
    "&:disabled": {
        color: alpha("#fff", 0.3),
    },
    "&.unclickable": {
        cursor: "default",
        background: `${theme.palette.primary.main} !important`,
        color: "#fff",
        borderColor: theme.palette.primary.main,
    },
}));

const PaginationWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
}));

type UniqueKey = string | number;
interface PaginatedStaticContentProps<T> {
    perPage: number;
    data: T[];
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

    const start: number = (state.currentPage - 1) * state.perPage;
    const stop: number = state.currentPage * state.perPage;

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
                props.data.slice(start, stop).map((item, index) => {
                    return props.renderItem(item, props.keyResolver ? props.keyResolver(item, index) : index);
                })
            )}

            <PaginationWrapper>
                <PaginationStep
                    sx={{ mr: "14px" }} //
                    disabled={state.currentPage === 1}
                    onClick={() => dispatch({ type: "PREVIOUS" })}
                >
                    <NavigateBefore />
                </PaginationStep>

                {renderNTimes({
                    startWith: 1,
                    n: state.pagesInTotal,
                    renderElement: (index) => (
                        <PaginationStep
                            key={`pagination-button-${index}`} //
                            color={index === state.currentPage ? "primary" : "text"}
                            className={index === state.currentPage ? "unclickable" : ""}
                            disabled={index === state.currentPage}
                            onClick={() => dispatch({ type: "PARTICULAR", payload: index })}
                        >
                            {index}
                        </PaginationStep>
                    ),
                })}

                <PaginationStep
                    sx={{ marginLeft: "24px !important" }} //
                    disabled={state.currentPage === state.pagesInTotal}
                    onClick={() => dispatch({ type: "NEXT" })}
                >
                    <NavigateNext />
                </PaginationStep>
            </PaginationWrapper>
        </>
    );
};

export default PaginatedStaticContent;
