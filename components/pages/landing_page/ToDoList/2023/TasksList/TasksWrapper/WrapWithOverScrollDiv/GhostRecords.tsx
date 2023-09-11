// Tools
import { alpha, styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { renderNTimes } from "@/utils/client/renderNTimes";
// Types
import type { FunctionComponent } from "react";

const GhostRecord = styled("div")(({ theme }) => ({
    width: "100%",
    height: "78px",
    marginTop: "24px",
    background: alpha("#fff", 0.045),
    borderRadius: "5px",
    animation: `${fadeSimple} .5s .1s both ease-in-out`,
}));
interface GhostRecordsProps {
    amountOfTasks: number;
}

const GhostRecords: FunctionComponent<GhostRecordsProps> = (props) => {
    return (
        <>
            {renderNTimes({
                n: 4 - props.amountOfTasks,
                renderElement: (index) => <GhostRecord key={index} />,
            })}
        </>
    );
};

export default GhostRecords;
