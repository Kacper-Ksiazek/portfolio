// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Other components
const YearToIndicateBase = styled("span")(({ theme }) => ({
    fontSize: "160px",
    fontWeight: 900,
    color: alpha(theme.palette.secondary.main, 0.05),
    letterSpacing: "10px",
    userSelect: "none",
    zIndex: -1,
    display: "block",
    "&.even": {
        marginLeft: "200px",
    },
    "&.odd": {
        marginRight: "200px",
    },
}));
interface YearToIndicateProps {
    year: number;
    order: "even" | "odd";
}

const YearToIndicate: FunctionComponent<YearToIndicateProps> = (props) => {
    return (
        <YearToIndicateBase className={["year-indicator", props.order].join(" ")}>
            {String(props.year)
                .split("")
                .map((item, index) => {
                    return (
                        <span className="digit" key={index}>
                            {item}
                        </span>
                    );
                })}
        </YearToIndicateBase>
    );
};

export default YearToIndicate;
