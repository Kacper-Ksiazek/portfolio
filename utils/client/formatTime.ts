type OutputType = "CLOCK" | "SHORT" | "LONG";

export interface MinSecTimeFormat {
    minutes: number;
    seconds: number;
}

interface StartEndFormat {
    start: number;
    end: number;
}

interface SecOnlyTimeFormat {
    seconds: number;
}

interface FormatTimeParams {
    time: MinSecTimeFormat | SecOnlyTimeFormat | StartEndFormat;
    outputType: OutputType;
}

export const formatTime = (params: FormatTimeParams): string => {
    let [minutes, seconds] = [0, 0];

    if (isMinSecTimeFormat(params.time)) {
        minutes = (params.time as MinSecTimeFormat).minutes;
        seconds = params.time.seconds;
    }
    //
    else if (isStartEndFormat(params.time)) {
        const delta = Math.floor((params.time.end - params.time.start) / 1000);
        console.log(delta, params.time);
        minutes = Math.floor(delta / 60);
        seconds = delta % 60;
    }
    //
    else if (isSecOnlyTimeFormat(params.time)) {
        minutes = Math.floor(params.time.seconds / 60);
        seconds = params.time.seconds % 60;
    } else {
        return "-";
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

function isStartEndFormat(params: unknown): params is StartEndFormat {
    if (params instanceof Object) {
        const keys = Object.keys(params);
        return keys.includes("start") && keys.includes("end");
    }
    return false;
}

const displayAugmentedDigit = (digit: number | string): number | string => {
    return String(digit).length === 1 ? `0${digit}` : digit;
};
