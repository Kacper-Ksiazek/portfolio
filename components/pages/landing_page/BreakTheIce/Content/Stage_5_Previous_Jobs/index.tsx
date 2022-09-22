// Tools
import { useEffect, useState } from "react";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import SinglePreviousJob from "./SinglePreviousJob";
// Styled Components
import Paragraph from "../_styled_components/Paragraph";
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

const PreviousJobs: FunctionComponent = () => {
    const { previousJobs } = useBreakTheIceContentContext();
    const [makeCardsHoverable, setMakeCardsHoverable] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;

        setTimeout(() => {
            if (isMounted) setMakeCardsHoverable(true);
        }, 4000);

        return () => {
            isMounted = false;
        };
    }, []);

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
                displayScrollBarAfterTimeout={2000}
            >
                {previousJobs.map((item, index) => {
                    return (
                        <SinglePreviousJob
                            data={item} //
                            key={item.id}
                            hoverable={makeCardsHoverable}
                        />
                    );
                })}
            </OverflowScrollDiv>
        </>
    );
};

export default PreviousJobs;
