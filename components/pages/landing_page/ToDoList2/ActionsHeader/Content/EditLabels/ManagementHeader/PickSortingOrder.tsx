// Types
import type { FunctionComponent } from "react";
import type { EditLabelsFilters } from "landing_page/ToDoList2/@types";
import type { OptionWithAlias } from "@/components/atoms/forms/StyledSelect";
// Material UI Icons
import SortByAlphaRoundedIcon from "@mui/icons-material/SortByAlphaRounded";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";

type Order = EditLabelsFilters["order"];

interface PickSortingOrderProps {
    value: Order;
    updateValue: (val: Order) => void;
}

const OPTIONS: OptionWithAlias<Order>[] = [
    { alias: "Newest", value: "NEWEST" },
    { alias: "Oldest", value: "OLDEST" },
    { alias: "Popular", value: "FREQUENTLY_USED" },
    { alias: "Unpopular", value: "RARELY_USED" },
];

const PickSortingOrder: FunctionComponent<PickSortingOrderProps> = (props) => {
    return (
        <StyledSelect
            value={props.value} //
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
