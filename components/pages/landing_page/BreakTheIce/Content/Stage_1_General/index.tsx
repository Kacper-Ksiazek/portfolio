// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Styled Components
import Label from "../_styled_components/Label";
import Paragraph from "../_styled_components/Paragraph";
import RatedInStars from "../_styled_components/RatedInStars";

const General: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <>
            <Paragraph animationDelay={0.7}>
                {formatTextViaBolding(`I was born in 2002 and I have lived in Poland for my entire life. *Since the age of 16* an ardent and ambitious self-advancing *software engineer*. I am trustworthy, ingenious and
                resourceful person, role model for peers. Humility is undoubtedly my biggest quality.`)}
            </Paragraph>

            <Paragraph animationDelay={0.8}>
                {formatTextViaBolding(`In the year of *2019* I began my *first commercial project*, which was a company side with a custom made CRUD for their blog and offers. I coded everything from scratch all by myself
                using *vue 2* and *laravel* and after 3 months the work was finally done with satisfying for both me and the customer result.`)}
            </Paragraph>

            <Paragraph animationDelay={0.9}>
                {formatTextViaBolding(`My *second* major commercial *project* was virtually identical to the first. Having over year and half more of experience, *everything went considerably better* in all aspects and
                eventually the project successfully  ended in February  2021 after spending only 3 weeks of hard work.`)}
            </Paragraph>

            <Label animationDelay={1}>Languages</Label>

            <RatedInStars name="Polish" stars={5} description="Native speaker" animationDelay={1.1} />
            <RatedInStars name="English" stars={4} description="Between B2 and C1, learn every day" animationDelay={1.2} />
            <RatedInStars name="German" stars={1} description="Eines tages eines tages, leider nicht jetzt" animationDelay={1.3} />
        </>
    );
};

export default General;
