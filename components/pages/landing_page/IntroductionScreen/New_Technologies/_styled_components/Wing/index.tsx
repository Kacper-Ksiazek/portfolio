// Tools
import RWD from "./RWD";
import { styled } from "@mui/system";
import { placeItemsInsideWing } from "./_cssInJsGenerator";

export default styled("div")(({ theme }) => ({
    width: "50%",
    display: "flex",
    boxSizing: "border-box",
    ...(placeItemsInsideWing({
        contentSidePadding: 340,
        spacingBetweenColumns: 72,
        nearest: 96,
        middle: 80,
        farest: 64,
        technologySize: 100,
    }) as any),
    //
    //
    //
    ...(RWD as any),
}));
