// Tools
import { useEffect, useRef, useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import { CarosuelWrapper, ChildrenElementsWrapper, NavigationWrapper, SingleNagivationStep } from "./_styled_components";

interface CarosuelProps {
    /**
     * Spacing between elements, expresed in **px**
     */
    spacing: number;
    /**
     * The amount of elements in total
     */
    itemsInTotal: number;
    /**
     * The amount of elements to display on each slide
     */
    itemsPerSlide: number;
    children: ReactNode;
    /**
     * Additional styles added to the **navigation wrapper element**, following the `MUI`'s convention of css-in-js
     */
    wrapperSx?: SxProps;
    /**
     * Additional styles added to the **main wrapper element**, following the `MUI`'s convention of css-in-js
     */
    navigationSx?: SxProps;
    /**
     * The position of the bottom navigation which controls the sliding
     */
    navigationPosition?: "left" | "right" | "center";
    /**
     * Disable automatic height establishing
     */
    disableAutomaticHeight?: boolean;
}

const Carosuel: FunctionComponent<CarosuelProps> = (props) => {
    const { width } = useWindowSizes();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [componentHasBeenFullMounted, setComponentHasBeenFullMounted] = useState<boolean>(false);
    const generalCarosuelWrapperElement = useRef<HTMLDivElement | null>(null);
    const childrenElemenetsWrapperElement = useRef<HTMLDivElement | null>(null);

    const totalAdditionalPadding = useRef<number>(0);

    // Set width of the wrapper and of each children
    useEffect(() => {
        if (childrenElemenetsWrapperElement.current) {
            const singleItemWidth: string = `(${generalCarosuelWrapperElement.current?.offsetWidth}px - ${props.spacing * (props.itemsPerSlide - 1)}px) / ${props.itemsPerSlide}`;

            totalAdditionalPadding.current = (props.itemsInTotal - 1) * props.spacing;
            childrenElemenetsWrapperElement.current.style.width = `calc(${singleItemWidth} * ${props.itemsInTotal} + ${totalAdditionalPadding.current}px)`;

            childrenElemenetsWrapperElement.current?.childNodes.forEach((node: any) => {
                if (node && node.style) node.style.width = `calc(${singleItemWidth})`;
            });
        }
    }, [props]);

    // On index change
    useEffect(() => {
        setTimeout(
            () => {
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
                }
            },
            componentHasBeenFullMounted ? 10 : props.itemsInTotal * 120
        );
    }, [currentPage, props.itemsInTotal, props.itemsPerSlide, componentHasBeenFullMounted]);

    // Fire this only once after component was mounted
    useEffect(() => {
        setTimeout(async () => {
            if (childrenElemenetsWrapperElement.current) {
                for (const el of [...(childrenElemenetsWrapperElement.current.childNodes as any)].slice(0, props.itemsPerSlide)) {
                    el.classList.add("initial-active");
                    await new Promise((resolve) => setTimeout(resolve, 100));
                }
                setComponentHasBeenFullMounted(true);
            }
        }, 1);
    }, [props.itemsPerSlide]);

    // Set automatic height
    useEffect(() => {
        setTimeout(() => {
            if (props.disableAutomaticHeight === false) {
                if (generalCarosuelWrapperElement.current && childrenElemenetsWrapperElement.current) {
                    const childrenHeights: number[] = [...(childrenElemenetsWrapperElement.current.childNodes as any)].map((el) => el.offsetHeight);
                    const maxChildrenHeight = Math.max(...childrenHeights);

                    generalCarosuelWrapperElement.current.style.height = `${maxChildrenHeight}px`;
                }
            }
        }, 5);
    }, [props.disableAutomaticHeight, width]);
    return (
        <>
            <CarosuelWrapper sx={props.wrapperSx} ref={generalCarosuelWrapperElement} className="carosuel-wrapper">
                <ChildrenElementsWrapper ref={childrenElemenetsWrapperElement}>{props.children}</ChildrenElementsWrapper>
            </CarosuelWrapper>

            <NavigationWrapper
                sx={props.navigationSx} //
                className={["carosuel-navigation", `position-${props.navigationPosition}`].join(" ")}
            >
                {(() => {
                    const navigationStepsInTotal = props.itemsInTotal - props.itemsPerSlide + 1;
                    const result: any[] = [];
                    for (let i = 0; i < navigationStepsInTotal; i++) {
                        result.push(
                            <SingleNagivationStep
                                onClick={() => setCurrentPage(i)} //
                                key={i}
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

Carosuel.defaultProps = {
    navigationPosition: "left",
    disableAutomaticHeight: false,
};
