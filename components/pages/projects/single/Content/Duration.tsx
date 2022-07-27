// Tools
import { styled } from "@mui/system";
// Types
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
}));

interface DurationProps {
    start: string;
    end: string;
}

const Duration: FunctionComponent<DurationProps> = (props) => {
    return (
        <DurationBase className="duration">
            <AccessTime />
            <span>{`${props.start} - ${props.end}`}</span>
        </DurationBase>
    );
};

export default Duration;
