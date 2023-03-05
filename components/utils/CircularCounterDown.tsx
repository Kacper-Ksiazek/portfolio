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
            setProgress((val) => Math.max(val - 1, 0));
        }, props.time / 100);

        return () => {
            clearInterval(interval);
        };
    }, [props.time]);

    return <CircularProgress variant="determinate" value={progress} thickness={3} />;
};

export default CircularCounterDown;
