// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import useBreakTheIceContentContext from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import SingleSchool from "./SingleSchool";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";
import OverflowScrollDiv from "@/components/_styled_components/content_placement/OverflowScrollDiv";

const ScrollbarHidder = styled("span")(({ theme }) => ({
    position: "absolute",
    right: "0",
    background: "#fff",
    height: "100%",
    width: "10px",
    animation: `${fadeSimple} reverse .3s 1.1s both`,
}));

const Education: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const { schools } = useBreakTheIceContentContext();

    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(`I have always been *eager to learn*, because I thing this is a great way to develop such qualities as *meticulousness*, *gratitude* and
                *respectfulness* and furthermore I deem they considerably improve personality in general and also make farther life easier. Back in my school, I was always the student
                with the best results, mainly because I was *always striving to innovate* and find more efficient solutions, but most importantly because I was
                *never making excuses*.`)}
            </Paragraph>
            <OverflowScrollDiv
                maxHeight="380px" //
                sx={{
                    mt: "20px", //
                }}
            >
                <ScrollbarHidder />
                {schools.map((item) => {
                    return <SingleSchool key={item.id} data={item} />;
                })}
            </OverflowScrollDiv>
        </>
    );
};

export default Education;
