// Tools
import { keyframes } from "@mui/material";

type Animation = [ReturnType<typeof keyframes>, number, number] | [ReturnType<typeof keyframes>, number];

export function chainAnimations(animations: Animation[]): string {
    let totalDelay = 0;
    let result: string[] = [];

    animations.forEach((el, index) => {
        const isFirst = index === 0;
        let [animation, duration, delay] = el;

        totalDelay += delay ?? 0;
        result.push(`${animation} ${duration}s ${totalDelay}s linear ${isFirst ? "both" : "forwards"}`);
        totalDelay += duration;
    });

    return result.join(", ");
}
