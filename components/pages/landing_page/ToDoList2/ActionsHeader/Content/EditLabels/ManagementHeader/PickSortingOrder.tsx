// Types
import type { LabelsFilters } from "../@types";
import type { FunctionComponent } from "react";
import type { OptionWithAlias } from "@/components/atoms/forms/StyledSelect";
// Other components
import StyledSelect from "@/components/atoms/forms/StyledSelect";

type Order = LabelsFilters["order"];

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
            sx={{
                width: "132px",
                height: "42px",
            }}
        />
    );
};

export default PickSortingOrder;
