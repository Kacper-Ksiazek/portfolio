// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
// Styled Components
import Label from "../_styled_components/Label";
import Paragraph from "../_styled_components/Paragraph";
import RatedInStars from "../_styled_components/RatedInStars";

interface GeneralProps {
    renderContent: boolean;
}

const General: FunctionComponent<GeneralProps> = (props) => {
    if (props.renderContent) {
        return (
            <>
                <Paragraph animationDelay={0.7}>
                    {formatTextViaBolding(`I was born in 2002 and have lived in Poland my entire life. *Since the age of 16*, I have been an ambitious and self-advancing *software engineer*. I am a trustworthy, hard-working, and resourceful person who is eager to learn new things.
`)}
                </Paragraph>

                <Paragraph animationDelay={0.8}>
                    {formatTextViaBolding(
                        `In *2019*, I embarked on *my first commercial project*, which was creating a custom CRUD system for a company's blog posts and offers. I developed the entire system from scratch using *Vue 2* and *Laravel*. After three months of dedicated work, I successfully delivered a solution that was highly satisfying for both me and the customer.`
                    )}
                </Paragraph>

                <Paragraph animationDelay={0.9}>
                    {formatTextViaBolding(
                        `My *second* major commercial *project* was very similar. With over a year and a half of additional experience, *everything went significantly smoother* in all aspects. The project successfully concluded in February 2021 after just three weeks of hard work.`
                    )}
                </Paragraph>

                <Label animationDelay={1}>Languages</Label>

                <RatedInStars name="Polish" stars={5} description="Native speaker" animationDelay={1.1} />
                <RatedInStars name="English" stars={4} description="C1" animationDelay={1.2} />
                <RatedInStars name="German" stars={1} description="A2" animationDelay={1.3} />
            </>
        );
    }
    return <></>;
};

export default General;
