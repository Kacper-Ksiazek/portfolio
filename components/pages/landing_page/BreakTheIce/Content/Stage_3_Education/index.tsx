// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SingleSchool from "./SingleSchool";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

const Education: FunctionComponent = () => {
    const { schools } = useBreakTheIceContentContext();

    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(`I have always been *eager to learn*, because I think it is a great way to develop qualities such as *meticulousness*, *gratitude* and
                *respectfulness*. Furthermore, I deem it significantly improves personality in general and also make farther life easier. During in my high-school years, I usually achieved
                the best results, primarily due to my *curiosity* and perpetual pursuit of *more efficient solutions*. Most importantly, because I was
                *never making excuses* and the term of hard working was never something strange for me.`)}
            </Paragraph>
            <OverflowScrollDiv
                maxHeight="350px" //
                sx={{
                    mt: "20px", //
                }}
                displayScrollBarAfterTimeout={1100}
            >
                {schools.map((item) => {
                    return <SingleSchool key={item.id} data={item} />;
                })}
            </OverflowScrollDiv>
        </>
    );
};

export default Education;
