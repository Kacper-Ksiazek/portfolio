// Tools
import { useLabelsContext } from "../hooks/useLabelsContext";
// Types
import type { Filters as I_Filters } from "../@types";
import type { FunctionComponent, Dispatch } from "react";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// Material UI Icons
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
// Styled components
import FiltersWrapper from "./Base";

interface FiltersProps {
    filters: I_Filters;
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

            <FormControlLabel
                sx={{
                    height: "28px", //
                    ml: "-10px",
                }}
                control={<Switch />} //
                label="Only completed"
                checked={props.filters.completedOnly}
                onChange={(e) => {
                    props.updateFilters({ completedOnly: (e.target as any).checked });
                }}
            />
        </FiltersWrapper>
    );
};

export default Filters;
