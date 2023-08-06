// Types
import type { FunctionComponent } from "react";
// Styled components
import FlexBox from "@/components/atoms/content_placement/FlexBox";
import { ProgressBar } from "landing_page/ToDoList2/atoms/ProgressBar";

const ThereAreNoRatios: FunctionComponent = () => {
    return (
        <FlexBox
            sx={{
                width: "100%",
                display: "flex",
                marginTop: "4px",
            }}
        >
            <ProgressBar
                completion="0%" //
                color="#333"
            />
        </FlexBox>
    );
};

export default ThereAreNoRatios;
