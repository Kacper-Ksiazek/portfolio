// Tools
import { styled } from "@mui/material";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
// Types
import type { ResponsiveHeightCSSClass } from "../hooks/useResponsiveHeight";
// Styled components
import SectionWrapper from "landing_page/ToDoList2/atoms/SectionWrapper";
// Styles
import { default as AddNewTaskRWD } from "../Content/AddNewTask/RWD";

export default styled(SectionWrapper)(({ theme }) => ({
    height: "400px",
    display: "flex",
    flexDirection: "column",
    transition: "max-height .3s",
    overflow: "hidden",

    "@media (max-width:770px)": {
        height: "620px",
    },

    [`&.${"PROGRESS_TRACKER" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "256px",
        "@media (max-width:770px)": {
            maxHeight: "440px",
        },
        "@media (max-width:660px)": {
            maxHeight: "620px",
        },
    },

    [`&.${"ADD_NEW_TASK" as ResponsiveHeightCSSClass}`]: mergeSXObjects(
        {
            maxHeight: "312px",
            "@media (max-width:770px)": {
                maxHeight: "500px",
            },
            "@media (max-width:700px)": {
                maxHeight: "550px",
            },
            "@media (max-width:500px)": {
                maxHeight: "616px",
            },
        },
        AddNewTaskRWD
    ),

    [`&.${"EDIT_LABELS" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "400px",
        "@media (max-width:1000px)": {
            height: "520px",
            maxHeight: "520px",
        },
        "@media (max-width:770px)": {
            height: "640px",
            maxHeight: "640px",
        },
        "@media (max-width:590px)": {
            height: "720px",
            maxHeight: "720px",
        },
        "@media (max-width:400px)": {
            height: "760px",
            maxHeight: "760px",
        },
    },

    [`&.${"HIDDEN" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "64px",
        "@media (max-width:770px)": {
            maxHeight: "244px",
        },
    },
}));
