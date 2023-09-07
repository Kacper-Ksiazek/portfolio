// Tools
import { styled } from "@mui/material";
import { mergeSXObjects } from "@/utils/client/mergeSXObjects";
// Types
import type { ResponsiveHeightCSSClass } from "../hooks/useResponsiveHeight";
// Styled components
import SectionWrapper from "landing_page/ToDoList/2023/atoms/SectionWrapper";
// Styles
import { default as AddNewTaskRWD } from "../Content/AddNewTask/RWD";

export default styled(SectionWrapper)(({ theme }) =>
    mergeSXObjects(
        {
            height: "400px",
            display: "flex",
            flexDirection: "column",
            transition: "max-height .3s",
            overflow: "hidden",

            "@media (max-width:1000px)": {
                height: "460px",
            },

            "@media (max-width:770px)": {
                height: "620px",
            },
            "@media (max-width:670px)": {
                height: "640px",
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

            [`&.${"ADD_NEW_TASK" as ResponsiveHeightCSSClass}`]: {
                maxHeight: "400px",
                "@media (max-width:1000px)": {
                    maxHeight: "456px",
                },
                "@media (max-width:770px)": {
                    maxHeight: "560px",
                },
                "@media (max-width:700px)": {
                    maxHeight: "610px",
                },
                "@media (max-width:670px)": {
                    maxHeight: "636px",
                },
            },

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
        },
        AddNewTaskRWD
    )
);
