// Tools
import RWD from "./RWD";
import { alpha, styled } from "@mui/material";
import { SELECTORS } from "../css_references";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";

export default styled("div")(({ theme }) => {
    return mergeSXObjects(
        {
            width: "100%",

            [SELECTORS.TABLE.ROW_WRAPPER]: {
                gap: "4px",
                "&:not(&:nth-of-type(1))": {
                    marginTop: "4px",
                },
                "&>*": {
                    boxSizing: "border-box",
                },
                "@media (min-width:671px)": {
                    "&>*": {
                        padding: "8px 20px",
                        borderRadius: "3px",
                        border: `1px solid ${alpha("#fff", 0.3)}`,
                    },
                },
            },

            [SELECTORS.TABLE.LABEL_NAME]: {
                width: "180px",
            },
            [SELECTORS.TABLE.BUTTONS.WRAPPER]: {
                width: "220px",
            },
            [SELECTORS.TABLE.PROGRESS_BAR]: {
                width: "calc(100% - 60px - 220px - 180px - 3 * 4px)",
                marginTop: "4px",
            },
            [SELECTORS.TABLE.INDEX]: {
                width: "60px",
            },
        },
        RWD
    );
});
