// Tools
import { CSS_REFERENCES } from "./css_references";
import { useFiltersDisability, useLabelsOptions, useUrgencyFilterDisability } from "./hooks";
// Types
import type { FunctionComponent } from "react";
import type { Task } from "landing_page/ToDoList2/@types/Tasks";
import type { LabelID } from "landing_page/ToDoList2/@types/Labels";
import type { OptionWithAlias } from "@/components/atoms/forms/StyledSelect";
import type { TasksFilters, UpdateTasksFilters } from "landing_page/ToDoList2/@types/Filters";
// Other components
import AmountOfTasks from "./AmountOfTasks";
import StyledSelect from "@/components/atoms/forms/StyledSelect";
// Material UI Icons
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
// Styled components
import FiltersWrapper from "./Base";

interface FiltersProps {
    filters: TasksFilters;
    filteredTasks: Task[];
    fadeContentOut: boolean;
    updateFilters: UpdateTasksFilters;
}

const Filters: FunctionComponent<FiltersProps> = (props) => {
    const { filteredTasks, filters, fadeContentOut, updateFilters } = props;

    const labelsOptions: OptionWithAlias<LabelID>[] = useLabelsOptions();

    const disableFilteringByCompletion: boolean = useFiltersDisability(filteredTasks, filters.completion);
    const disableUrgencyFilter: boolean = useUrgencyFilterDisability({ fadeContentOut, filteredTasks, filters, updateFilters });

    const disableSortingTools: boolean = filteredTasks.length <= 1 || props.fadeContentOut;
    const disableFilterByLabel: boolean = props.filters.withParticularLabel === "_ALL" && props.filteredTasks.length === 0;

    return (
        <FiltersWrapper>
            <StyledSelect
                id={CSS_REFERENCES.SELECT.LABEL}
                value={props.filters.withParticularLabel} //
                options={[
                    {
                        alias: "All",
                        value: "_ALL",
                    },
                    ...labelsOptions,
                ]}
                disabled={disableFilterByLabel}
                startAdornment={<CategoryRoundedIcon />}
                onChange={(e) =>
                    props.updateFilters({
                        withParticularLabel: e.target.value,
                        completion: "_ALL",
                    })
                }
            />
            <StyledSelect
                id={CSS_REFERENCES.SELECT.URGENCY_FILTER}
                value={filters.urgencyFilter}
                startAdornment={<PriorityHighRoundedIcon />}
                onChange={(e) => props.updateFilters({ urgencyFilter: e.target.value })}
                disabled={disableUrgencyFilter}
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
                id={CSS_REFERENCES.SELECT.ORDER}
                value={props.filters.sort}
                startAdornment={<SortByAlphaRoundedIcon />}
                onChange={(e) => props.updateFilters({ sort: e.target.value })}
                disabled={disableSortingTools}
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
                id={CSS_REFERENCES.SELECT.COMPLETION_FILTER}
                value={props.filters.completion}
                startAdornment={<CheckCircleOutlineRoundedIcon />}
                onChange={(e) => props.updateFilters({ completion: e.target.value })}
                disabled={disableFilteringByCompletion}
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

            <AmountOfTasks
                id={CSS_REFERENCES.AMOUNT_OF_TASKS} //
                quantity={filteredTasks.length}
            />
        </FiltersWrapper>
    );
};

export default Filters;
