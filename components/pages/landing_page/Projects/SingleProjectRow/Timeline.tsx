// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components
const TimelineCore = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "0%",
    width: "10px",
    left: "50%",
    height: "101%",
    transform: "translateX(-50%)",
    "&::before": {
        content: "''",
        width: "100%",
        position: "absolute",
        height: "100%",
        background: theme.palette.secondary.main,
    },
    "&.first-project": {
        "&::before": {
            bottom: "0",
            height: "50%",
        },
    },
    "&.last-project": {
        "&::before": {
            height: "50%",
        },
    },
}));

const Connection = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    width: "70px",
    height: "10px",
    transform: "translateY(-50%)",
    "&.year-indicating-timeline": {
        top: "calc(50% + 160px)",
        transform: "translateY(calc(-50% - 90px))",
    },
    "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        background: theme.palette.secondary.main,
    },
    "&.even": {
        left: "-70px",
        "&::before": {
            right: 0,
        },
    },
    "&.odd": {
        right: "-70px",
        "&::before": {
            left: 0,
        },
    },
}));

const Dot = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "5px",
    background: theme.palette.primary.main,
    width: "24px",
    height: "24px",
    // Left side
    "&.odd": {
        "&.dot.left": {
            left: "-17px",
        },
        "&.dot.right": {
            right: "0",
        },
    },
    // Right side
    "&.even": {
        "&.dot.left": {
            left: "0",
        },
        "&.dot.right": {
            right: "-17px",
        },
    },
}));

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
                "timeline-core",
            ].join(" ")}
        >
            <Connection
                className={[
                    props.thisRowIsAYearIndicator ? "year-indicating-timeline" : "", //
                    props.order,
                    "timeline-connection",
                ].join(" ")}
            >
                <Dot className={`dot left ${props.order}`} />
                <Dot className={`dot right ${props.order}`} />
            </Connection>
        </TimelineCore>
    );
};

export default Timeline;
