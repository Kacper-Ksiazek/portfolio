// Tools
import { useEffect, useState } from "react";
// Material UI Components
import CircularProgress from "@mui/material/CircularProgress";

import type { FunctionComponent } from "react";

interface CircularCounterDownProps {
    /** Period of time to count down expressed in **ms** */
    time: number;
}

const CircularCounterDown: FunctionComponent<CircularCounterDownProps> = (props) => {
    const [progress, setProgress] = useState<number>(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((val) => val - 1);
        }, props.time / 100);
        const timeout = setTimeout(() => clearInterval(interval), props.time + 1);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [props.time]);

    return <CircularProgress variant="determinate" value={progress} thickness={3} />;
};

export default CircularCounterDown;
