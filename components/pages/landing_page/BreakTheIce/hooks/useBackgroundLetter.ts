// Tools
import { useState, useEffect } from "react";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";

export function useBackgroundLetter(): string {
    const [letter, setLetter] = useState<string>("K");
    const { currentIceBreakingStage } = useBreakTheIceContentContext();

    // Update letter after stage being change
    useEffect(() => {
        const letters: Record<IceBreakingStage, string> = {
            General: "K",
            Competencies: "A",
            Education: "C",
            Hobbies: "P",
            Previous_Jobs: "E",
        };
        setLetter(letters[currentIceBreakingStage]);
    }, [currentIceBreakingStage]);

    return letter;
}
