// Tools
import { CLASSES } from "../css_references";
import { useLabelsContext } from "../hooks/useLabelsContext";
// Types
import type { Filters as I_Filters } from "../@types";
import type { FunctionComponent, Dispatch } from "react";
// Other components
import AmountOfTasks from "./AmountOfTasks";
import StyledSelect from "@/components/atoms/forms/StyledSelect";
import FlexBox from "@/components/atoms/content_placement/FlexBox";
// Material UI Icons
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
// Styled components
import FiltersWrapper from "./Base";

interface FiltersProps {
    filters: I_Filters;
    amountOfTasks: number;
    disableSortingTools: boolean;
    disableFilteringByCompletion: boolean;
    updateFilters: Dispatch<Partial<I_Filters>>;
}

const Filters: FunctionComponent<FiltersProps> = (props) => {
    const labelsContext = useLabelsContext();

    return (
        <FiltersWrapper className={CLASSES.FILTERS_WRAPPER}>
            <FlexBox vertical="center">
                <StyledSelect
                    className="filter-select-label"
                    value={props.filters.withParticularLabel} //
                    options={[
                        {
                            alias: "All",
                            value: "_ALL",
                        },
                        ...labelsContext._labelNamesInUse,
                    ]}
                    startAdornment={<CategoryRoundedIcon />}
                    onChange={(e) =>
                        props.updateFilters({
                            withParticularLabel: e.target.value,
                            completion: "_ALL",
                        })
                    }
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
                    disabled={props.disableFilteringByCompletion}
                    options={[
                        {
                            alias: "All",
                            value: "_ALL",
                        },
                        {
                            alias: "Completed",
                            value: "COMPLETED_ONLY",
                        },
                        {
                            alias: "Not completed",
                            value: "NOT_COMPLETED_ONLY",
                        },
                    ]}
                />
            </FlexBox>

            <AmountOfTasks quantity={props.amountOfTasks} />
        </FiltersWrapper>
    );
};

export default Filters;
