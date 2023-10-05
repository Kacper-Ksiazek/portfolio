// Tools
import { CSS_REFERENCES } from "../css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
import { Connection, Dot, TimelineCore } from "./styled_components";

interface TimelineProps {
    isLast: boolean;
    isFirst: boolean;
    order: "even" | "odd";
    thisRowIsAYearIndicator: boolean;
}

const Timeline: FunctionComponent<TimelineProps> = (props) => {
    return (
        <TimelineCore
            className={[
                props.isFirst ? "first-project" : "", //
                props.isLast ? "last-project" : "", //
                CSS_REFERENCES.TIMELINE.CORE,
            ].join(" ")}
        >
            <Connection
                className={[
                    props.thisRowIsAYearIndicator ? "year-indicating-timeline" : "", //
                    props.order,
                    CSS_REFERENCES.TIMELINE.CONNECTION,
                ].join(" ")}
            >
                <Dot className={`${CSS_REFERENCES.TIMELINE.LEFT_DOT} ${props.order}`} />
                <Dot className={`${CSS_REFERENCES.TIMELINE.RIGHT_DOT} ${props.order}`} />
            </Connection>
        </TimelineCore>
    );
};

export default Timeline;
