// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
const YearToIndicateBase = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    fontSize: "160px",
    fontWeight: 900,
    color: alpha(theme.palette.secondary.main, 0.05),
    letterSpacing: "10px",
    userSelect: "none",
    transform: "translateY(-50%)",
    zIndex: -1,
}));
interface YearToIndicateProps {
    year: number;
}

const YearToIndicate: FunctionComponent<YearToIndicateProps> = (props) => {
    return <YearToIndicateBase className="year-indicator">{props.year}</YearToIndicateBase>;
};

export default YearToIndicate;
