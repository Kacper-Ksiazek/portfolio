type OutputType = "CLOCK" | "SHORT" | "LONG";

interface MinSecTimeFormat {
    minutes: number;
    seconds: number;
}

interface SecOnlyTimeFormat {
    seconds: number;
}

interface FormatTimeParams {
    time: MinSecTimeFormat | SecOnlyTimeFormat;
    outputType: OutputType;
}

export const formatTime = (params: FormatTimeParams): string => {
    let [minutes, seconds] = [0, 0];

    const timeIsSecOnlyType = isSecOnlyTimeFormat(params.time);
    const timeIsMinSecTimeFormat = isMinSecTimeFormat(params.time);

    if (!timeIsSecOnlyType && !timeIsMinSecTimeFormat) return "-";

    if (timeIsMinSecTimeFormat) {
        minutes = (params.time as MinSecTimeFormat).minutes;
        seconds = params.time.seconds;
    } else {
        minutes = Math.floor(params.time.seconds / 60);
        seconds = params.time.seconds % 60;
    }

    switch (params.outputType) {
        case "CLOCK":
            return `${displayAugmentedDigit(minutes)}:${displayAugmentedDigit(seconds)}`;
        case "SHORT":
            if (minutes > 0) return `${minutes} min ${seconds} sec`;
            return `${seconds} seconds`;
        case "LONG":
            if (minutes > 0) return `${minutes} min ${seconds} sec`;
            return `${seconds} seconds`;
    }
};

const isMinSecTimeFormat = (params: unknown): params is MinSecTimeFormat => {
    if (params instanceof Object) {
        const keys = Object.keys(params);

        return (
            keys.includes("minutes" as keyof MinSecTimeFormat) &&
            keys.includes("seconds" as keyof MinSecTimeFormat) &&
            !isNaN(Number((params as Record<keyof MinSecTimeFormat, unknown>)["minutes"])) &&
            !isNaN(Number((params as Record<keyof MinSecTimeFormat, unknown>)["seconds"]))
        );
    }
    return false;
};

const isSecOnlyTimeFormat = (params: unknown): params is SecOnlyTimeFormat => {
    if (params instanceof Object) {
        const keys = Object.keys(params);

        return (
            keys.includes("seconds" as keyof MinSecTimeFormat) && //
            !isNaN(Number((params as Record<keyof MinSecTimeFormat, unknown>)["seconds"]))
        );
    }
    return false;
};

const displayAugmentedDigit = (digit: number | string): number | string => {
    return String(digit).length === 1 ? `0${digit}` : digit;
};
