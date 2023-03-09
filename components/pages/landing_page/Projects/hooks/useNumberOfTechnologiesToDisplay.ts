// Tools
import { useEffect, useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";

export function useNumberOfTechnologiesToDisplay(): number {
    const { width } = useWindowSizes();
    const [numberOfTechnologiesToDisplay, setNumberOfTechnologiesToDisplay] = useState<number>(5);

    useEffect(() => {
        if (width > 1600) setNumberOfTechnologiesToDisplay(5);
        else if (width <= 1600 && width > 1480) setNumberOfTechnologiesToDisplay(4);
        else if (width <= 1480 && width > 1350) setNumberOfTechnologiesToDisplay(3);
        else if (width <= 1350 && width > 1200) setNumberOfTechnologiesToDisplay(4);
        else if (width <= 1200 && width > 1000) setNumberOfTechnologiesToDisplay(3);
        else if (width <= 1000 && width > 450) setNumberOfTechnologiesToDisplay(5);
        else setNumberOfTechnologiesToDisplay(4);
    }, [width]);

    return numberOfTechnologiesToDisplay;
}
