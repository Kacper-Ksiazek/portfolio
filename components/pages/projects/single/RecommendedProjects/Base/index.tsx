// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import RenderWhenVisible from "@/components/utils/RenderWhenVisible";
// Styled components
const ContentWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    marginTop: "16px",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    minHeight: "640px",
    ["@media (max-width:680px)"]: {
        minHeight: "700px",
    },
}));

interface RecommendedProjectsBaseProps {
    children: ReactNode;
}

const RecommendedProjectsBase: FunctionComponent<RecommendedProjectsBaseProps> = (props) => {
    return (
        <ContentWrapper>
            <RenderWhenVisible
                sx={{
                    flexGrow: 1, //
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {props.children}
            </RenderWhenVisible>
        </ContentWrapper>
    );
};

export default RecommendedProjectsBase;
