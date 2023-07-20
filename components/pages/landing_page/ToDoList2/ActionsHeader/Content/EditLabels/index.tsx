// Tools
import { useFilteredLabels } from "./hooks/useFilteredLabels";
// Types
import type { FunctionComponent } from "react";
// Other components
import LabelsList from "./LabelsList";
import ManagementHeader from "./ManagementHeader";

const EditLabels: FunctionComponent = () => {
    const { updateFilters, filters, labels } = useFilteredLabels();

    return (
        <>
            <ManagementHeader
                filters={filters} //
                updateFilters={updateFilters}
                amountOfLabels={labels.length}
            />
            <LabelsList
                labels={labels} //
                applyUrgentModeAlternativeAppearance={filters.urgentModeAlternativeAppearance}
            />
        </>
    );
};

export default EditLabels;
