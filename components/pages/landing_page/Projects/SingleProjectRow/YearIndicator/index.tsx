// Tools
import { CSS_CLASSES } from "../_css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
import YearIndicatorBase from "./Base";

interface YearIndicatorProps {
    year: number;
    order: "even" | "odd";
}

const YearIndicator: FunctionComponent<YearIndicatorProps> = (props) => {
    return (
        <YearIndicatorBase className={["year-indicator", props.order].join(" ")}>
            {String(props.year)
                .split("")
                .map((item, index) => {
                    return (
                        <span className={CSS_CLASSES.YEAR_DIGIT} key={index}>
                            {item}
                        </span>
                    );
                })}
        </YearIndicatorBase>
    );
};

export default YearIndicator;
