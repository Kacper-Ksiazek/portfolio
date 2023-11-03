// Tools
import { useProjectsContext } from "../../../hooks/useProjectsContext";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import TechnologiesList from "@/components/atoms/TechnologiesList";

interface TechnologiesProps {
    data: Project["releventTechnologies"];
}

const Technologies: FunctionComponent<TechnologiesProps> = ({ data }) => {
    const { numberOfTechnologiesToDisplay } = useProjectsContext();

    return (
        <TechnologiesList
            technologies={data.slice(0, numberOfTechnologiesToDisplay)} //
            doNotWrap
            small
            thereAreMoreTechnologies={data.length > numberOfTechnologiesToDisplay}
        />
    );
};

export default Technologies;
