// Tools
import { alpha, styled } from "@mui/material";
import { useFilteredLabels } from "./hooks/useFilteredLabels";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleLabel from "./SingleLabel";
import ManagementHeader from "./ManagementHeader";
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

const StyledTable = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "auto 180px 1fr auto",
    gridTemplateRows: "repeat(4, 1fr)",
    width: "100%",
    alignItems: "stretch",
    gridGap: "4px",
    "&>*": {
        padding: "8px 20px",
        borderRadius: "3px",
        border: `1px solid ${alpha("#fff", 0.3)}`,
    },
}));

const EditLabels: FunctionComponent = () => {
    const { updateFilters, filters, labels } = useFilteredLabels();

    return (
        <>
            <ManagementHeader
                filters={filters} //
                updateFilters={updateFilters}
                amountOfLabels={labels.length}
            />

            <OverflowScrollDiv maxHeight="130px">
                <StyledTable>
                    {labels.map((item, index) => {
                        return (
                            <SingleLabel
                                key={index} //
                                index={index + 1}
                                amountOfTasks={item.amountOfTasks}
                                labelID={item.id}
                                urgentMode={filters.urgentModeAlternativeAppearance}
                            />
                        );
                    })}
                </StyledTable>
            </OverflowScrollDiv>
        </>
    );
};

export default EditLabels;
