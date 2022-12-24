const displayAugmentedDigit = (digit: number | string): number | string => {
    return String(digit).length === 1 ? `0${digit}` : digit;
};

export const formatTime = ({ minutes, seconds }: { minutes: number; seconds: number }): string => {
    return `${displayAugmentedDigit(minutes)}:${displayAugmentedDigit(seconds)}`;
};
