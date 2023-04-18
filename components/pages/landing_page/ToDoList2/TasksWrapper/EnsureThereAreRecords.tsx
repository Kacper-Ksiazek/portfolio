// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@keyframes/intro/fade";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Icons
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";

const NoRecordWrapper = styled("div")(({ theme }) => ({
    ...theme.mixins.flex_center,
    flexDirection: "column",
    userSelect: "none",
    animation: `${fadeSimple} .3s`,
    svg: {
        fontSize: "128px",
        marginBottom: "12px",
    },
    h2: {
        fontSize: "32px",
        margin: "0 0 8px 0",
    },
    paddingTop: "64px",
    "@media (max-height:880px)": {
        paddingTop: "32px",
    },
    "@media (max-height:800px)": {
        paddingTop: "16px",
    },
    "@media (max-height:750px)": {
        paddingTop: "0px",
    },
}));

interface EnsureThereAreRecordsProps {
    children: ReactNode;
    amountOfTasks: number;
}

const EnsureThereAreRecords: FunctionComponent<EnsureThereAreRecordsProps> = (props) => {
    if (props.amountOfTasks === 0) {
        return (
            <NoRecordWrapper>
                <BlurOnRoundedIcon />
                <h2>No tasks</h2>
                <p>There are no tasks matching given filters</p>
            </NoRecordWrapper>
        );
    }

    return <>{props.children}</>;
};

export default EnsureThereAreRecords;
