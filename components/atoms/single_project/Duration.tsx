// Tools
import { alpha, styled } from "@mui/material";
// Types
import type { SxProps } from "@mui/material";
import type { FunctionComponent } from "react";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
const DurationBase = styled("div", {
    shouldForwardProp: (prop) => prop !== "color",
})<{ color?: string }>(({ theme, ...props }) => {
    const color = props.color ?? theme.palette.text.primary;

    return {
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        marginTop: "4px",
        cursor: "default",
        color: alpha(color, 0.8),
        svg: {
            marginRight: "5px",
        },
        "&.smaller": {
            fontSize: "16px",
            svg: {
                fontSize: "18px",
            },
        },
    };
});

interface DurationProps {
    start: string;
    end: string;

    sx?: SxProps;
    color?: string;
    smaller?: boolean;
    className?: string;
}

export const CLASS_NAME: CSSClassName = "duration";

const Duration: FunctionComponent<DurationProps> = (props) => {
    return (
        <DurationBase
            className={[
                CLASS_NAME, //
                props.smaller ? "smaller" : "",
                props.className ?? "",
            ].join(" ")}
            sx={props.sx}
            color={props.color}
        >
            <AccessTime />
            <span>{`${props.start} - ${props.end}`}</span>
        </DurationBase>
    );
};

export default Duration;
