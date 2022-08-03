// Tools
import { styled } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
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
    svg: {
        marginRight: "5px",
    },
    "&.smaller": {
        fontSize: "14px",
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
