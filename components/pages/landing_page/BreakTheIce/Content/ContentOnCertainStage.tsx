// Tools
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
// Types
import type { FunctionComponent } from "react";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
const Stage_1_General = dynamic(() => import("./Stage_1_General"));
const Stage_2_Competences = dynamic(() => import("./Stage_2_Competences"));
const Stage_3_Education = dynamic(() => import("./Stage_3_Education"));
const Stage_4_Hobbies = dynamic(() => import("./Stage_4_Hobbies"));

interface ContentOnCertainStageProps {
    stage: IceBreakingStage;
}

const ContentOnCertainStage: FunctionComponent<ContentOnCertainStageProps> = (props) => {
    const [renderGeneralStage, setRenderGeneralStage] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = false;
        setTimeout(() => {
            if (isMounted) setRenderGeneralStage(true);
        }, 1100);
        return () => {
            isMounted = true;
        };
    }, []);

    switch (props.stage) {
        case "General":
            return <Stage_1_General renderContent={renderGeneralStage} />;
        case "Competences":
            return <Stage_2_Competences />;
        case "Education":
            return <Stage_3_Education />;
        case "Hobbies":
            return <Stage_4_Hobbies />;
    }
};

export default ContentOnCertainStage;
