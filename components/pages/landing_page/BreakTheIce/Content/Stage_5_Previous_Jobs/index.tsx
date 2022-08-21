// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import useBreakTheIceContentContext from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePreviousJob from "./SinglePreviousJob";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";
import OverflowScrollDiv from "@/components/_styled_components/content_placement/OverflowScrollDiv";

const PreviousJobs: FunctionComponent = () => {
    const { previousJobs } = useBreakTheIceContentContext();
    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(
                    `I have always *liked to work* and earn money by my own. When I was a child, it was giving me the feeling of being mature and ever less dependent on parents, now it gives me the opportunities to *advance myself* and to live better life. Even though the purposes had changed, the willingness to work and learn remained.`
                )}
            </Paragraph>

            <OverflowScrollDiv
                maxHeight="380px" //
                sx={{
                    mt: "20px", //
                }}
            >
                {previousJobs.map((item, index) => {
                    return <SinglePreviousJob data={item} key={item.id} />;
                })}
            </OverflowScrollDiv>
        </>
    );
};

export default PreviousJobs;
