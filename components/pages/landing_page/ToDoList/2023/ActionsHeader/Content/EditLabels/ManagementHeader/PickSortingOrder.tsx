// Types
import type { FunctionComponent, HTMLAttributes } from "react";
import type { OptionWithAlias } from "@/components/atoms/forms/StyledSelect";
import type { LabelsFilters } from "landing_page/ToDoList/2023/ActionsHeader/Content/EditLabels/@types";
// Material UI Icons
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";

type Order = LabelsFilters["order"];

interface PickSortingOrderProps extends HTMLAttributes<HTMLSelectElement> {
    value: Order;
    disabled: boolean;

    updateValue: (val: Order) => void;
}

const OPTIONS: OptionWithAlias<Order>[] = [
    { alias: "Newest", value: "NEWEST" },
    { alias: "Oldest", value: "OLDEST" },
    { alias: "Popular", value: "FREQUENTLY_USED" },
    { alias: "Unpopular", value: "RARELY_USED" },
];

const PickSortingOrder: FunctionComponent<PickSortingOrderProps> = (props) => {
    const { updateValue, ...propsToForward } = props;

    return (
        <StyledSelect
            {...propsToForward}
            onChange={(e) => props.updateValue(e.target.value)}
            options={OPTIONS}
            startAdornment={<SortByAlphaRoundedIcon />}
            sx={{
                width: "180px",
                height: "42px",
            }}
        />
    );
};

export default PickSortingOrder;
