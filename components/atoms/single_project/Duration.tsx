// Tools
import { alpha, styled } from "@mui/material";
// Types
import type { SxProps } from "@mui/material";
import type { FunctionComponent } from "react";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
const DurationBase = styled("div")(({ theme }) => ({
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    cursor: "default",
    color: alpha(theme.palette.text.primary, 0.8),
    svg: {
        marginRight: "5px",
    },
    "&.smaller": {
        fontSize: "16px",
        svg: {
            fontSize: "18px",
        },
    },
}));

interface DurationProps {
    start: string;
    end: string;
    smaller?: boolean;
    sx?: SxProps;
}

const Duration: FunctionComponent<DurationProps> = (props) => {
    return (
        <DurationBase
            className={[
                "duration", //
                props.smaller ? "smaller" : "",
            ].join(" ")}
            sx={props.sx}
        >
            <AccessTime />
            <span>{`${props.start} - ${props.end}`}</span>
        </DurationBase>
    );
};

export default Duration;
