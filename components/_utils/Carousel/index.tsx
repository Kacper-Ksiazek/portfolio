// Tools
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Styled components
const CarosuelWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    flexGrow: "1",
}));
const ChildrenElementsWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "0",
    height: "100%",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    transition: "transform .3s",
}));

const NavigationWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

const SingleNagivationStep = styled("span")(({ theme }) => ({
    width: "40px",
    height: "30px",
    cursor: "pointer",
    borderRadius: "1px",
    position: "relative",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "10px",
    },
    "&:after": {
        bottom: 0,
        position: "absolute",
        content: "''",
        width: "100%",
        height: "5px",
        background: "#000",
        transition: "all .3s",
    },
    "&.active": {
        "&:after": {
            transform: "scaleY(2)",
            background: theme.palette.primary.main,
        },
    },
}));

interface CarosuelProps {
    spacing: number;
    itemsInTotal: number;
    itemsPerSlide: number;

    children: ReactNode;
    wrapperSx?: SxProps;
    navigationSx?: SxProps;
}

const Carosuel: FunctionComponent<CarosuelProps> = (props) => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const generalCarosuelElement = useRef<HTMLDivElement | null>(null);
    const childrenElemenetsWrapperElement = useRef<HTMLDivElement | null>(null);

    const totalAdditionalPadding = useRef<number>(0);

    useEffect(() => {
        if (childrenElemenetsWrapperElement.current) {
            const singleItemWidth: string = `(${generalCarosuelElement.current?.offsetWidth}px - ${props.spacing}px) / ${props.itemsPerSlide}`;

            totalAdditionalPadding.current = (props.itemsInTotal - 1) * props.spacing;
            childrenElemenetsWrapperElement.current.style.width = `calc(${singleItemWidth} * ${props.itemsInTotal} + ${totalAdditionalPadding.current}px)`;

            childrenElemenetsWrapperElement.current?.childNodes.forEach((node: any) => {
                if (node && node.style) node.style.width = `calc(${singleItemWidth})`;
            });
        }
    }, [props]);

    useEffect(() => {
        setTimeout(() => {
            if (childrenElemenetsWrapperElement.current) {
                // Handle slide
                childrenElemenetsWrapperElement.current.style.transform = `translateX(calc(-1 * (100% - ${totalAdditionalPadding.current}px) * ${currentPage} / ${props.itemsInTotal} - ${
                    (totalAdditionalPadding.current * currentPage) / (props.itemsInTotal - 1)
                }px))`;
                const { childNodes } = childrenElemenetsWrapperElement.current;
                // Add .active class to visible elements
                [...(childNodes as any)].slice(currentPage, props.itemsPerSlide + currentPage).forEach((el: HTMLElement) => {
                    if (el.classList.contains("initial-active")) return;
                    el.classList.add("active");
                });
                // // Remove .active class from other elements
                // setTimeout(() => {
                //     [...[...(childNodes as any)].slice(0, currentPage), ...[...(childNodes as any)].slice(currentPage + props.itemsPerSlide)].forEach((el: HTMLElement) => {
                //         el.classList.remove("active");
                //     });
                // }, 400);
                // childrenElemenetsWrapperElement.
            }
        }, 10);
    }, [currentPage, props.itemsInTotal, props.itemsPerSlide]);

    // Fire this only once after component was mounted
    useEffect(() => {
        setTimeout(() => {
            if (childrenElemenetsWrapperElement.current) {
                [...(childrenElemenetsWrapperElement.current.childNodes as any)].slice(0, 2).forEach((el) => {
                    el.classList.add("initial-active");
                });
            }
        }, 1);
    }, []);

    return (
        <>
            <CarosuelWrapper sx={props.wrapperSx} ref={generalCarosuelElement}>
                <ChildrenElementsWrapper ref={childrenElemenetsWrapperElement}>{props.children}</ChildrenElementsWrapper>
            </CarosuelWrapper>

            <NavigationWrapper sx={props.navigationSx}>
                {(() => {
                    const result: any[] = [];
                    for (let i = 0; i < props.itemsInTotal - 1; i++) {
                        result.push(
                            <SingleNagivationStep
                                onClick={() => setCurrentPage(i)} //
                                className={currentPage === i ? "active" : ""}
                                role="button"
                            />
                        );
                    }
                    return result.map((el) => el);
                })()}
            </NavigationWrapper>
        </>
    );
};

export default Carosuel;
