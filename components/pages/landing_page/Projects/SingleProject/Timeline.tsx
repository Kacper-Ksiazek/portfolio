// Tools
import { styled } from "@mui/system";
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
    background: theme.palette.secondary.main,
    "&.year-indicator": {
        top: "calc(50% + 160px)",
        transform: "translateY(calc(-50% - 90px))",
    },
    "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        borderRadius: "5px",
        background: theme.palette.primary.main,
    },
    "&::before": {
        width: "32px",
        height: "32px",
    },
    "&::after": {
        width: "24px",
        height: "24px",
    },
    "&.even": {
        left: "-70px",
        "&::before": {
            left: "0",
        },
        "&::after": {
            right: "-17px",
        },
    },
    "&.odd": {
        right: "-70px",
        "&::before": {
            right: "0",
        },
        "&::after": {
            left: "-17px",
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
            ].join(" ")}
        >
            <Connection
                className={[
                    props.thisRowIsAYearIndicator ? "year-indicator" : "", //
                    props.order,
                ].join(" ")}
            />
            <span></span>
        </TimelineCore>
    );
};

export default Timeline;
