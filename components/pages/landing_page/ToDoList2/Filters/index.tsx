// Tools
import { useLabelsContext } from "../hooks/useLabelsContext";
// Types
import type { Filters as I_Filters } from "../@types";
import type { FunctionComponent, Dispatch } from "react";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";
// Material UI Icons
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
// Styled components
import FiltersWrapper from "./Base";

interface FiltersProps {
    filters: I_Filters;
    disableSortingTools: boolean;
    updateFilters: Dispatch<Partial<I_Filters>>;
}

const Filters: FunctionComponent<FiltersProps> = (props) => {
    const { labels } = useLabelsContext();

    return (
        <FiltersWrapper className="filters">
            <StyledSelect
                className="filter-select-label"
                value={props.filters.withParticularLabel} //
                options={[
                    {
                        alias: "All",
                        value: "_ALL",
                    },
                    ...labels,
                ]}
                startAdornment={<CategoryRoundedIcon />}
                onChange={(e) => props.updateFilters({ withParticularLabel: e.target.value })}
            />

            <StyledSelect
                className="filter-select-urgency"
                value={props.filters.urgencyFilter}
                startAdornment={<PriorityHighRoundedIcon />}
                onChange={(e) => props.updateFilters({ urgencyFilter: e.target.value })}
                disabled={props.disableSortingTools}
                options={[
                    {
                        alias: "Default",
                        value: "_DEFAULT",
                    },
                    {
                        alias: "Urgent first",
                        value: "URGENT_FIRST",
                    },
                    {
                        alias: "Urgent only",
                        value: "URGENT_ONLY",
                    },
                ]}
            />

            <StyledSelect
                className="filter-select-sort"
                value={props.filters.sort}
                startAdornment={<SortByAlphaRoundedIcon />}
                onChange={(e) => props.updateFilters({ sort: e.target.value })}
                disabled={props.disableSortingTools}
                options={[
                    {
                        alias: "Oldest",
                        value: "OLDEST",
                    },
                    {
                        alias: "Newest",
                        value: "NEWEST",
                    },
                ]}
            />

            <StyledSelect
                className="filter-select-completion"
                value={props.filters.completion}
                startAdornment={<CheckCircleOutlineRoundedIcon />}
                onChange={(e) => props.updateFilters({ completion: e.target.value })}
                options={[
                    {
                        alias: "All",
                        value: "_ALL",
                    },
                    {
                        alias: "Complete",
                        value: "COMPLETED_ONLY",
                    },
                    {
                        alias: "Incomplete",
                        value: "INCOMPLETE_ONLY",
                    },
                ]}
            />
        </FiltersWrapper>
    );
};

export default Filters;
