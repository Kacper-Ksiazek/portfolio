import colors from "colors";

export default class ConsolePrettier {
    protected messagesCounter: number = 0;
    protected readonly emoji = {
        OK: "✔".green,
        NOT_OK: "✖".red,
    };

    public constructor() {}

    public consoleMsg(msg: string, type: "SECTION" | "SUCCESS" | "ERROR" = "SECTION") {
        switch (type) {
            case "SECTION":
                return console.log(colors.bgMagenta.black(`${++this.messagesCounter}. ${msg}`));
            case "ERROR":
                return console.log(colors.red(`   ${this.emoji.NOT_OK} ${msg} ${this.emoji.NOT_OK}`));
            case "SUCCESS":
                return console.log(`   ${this.emoji.OK} ${msg}`);
        }
    }
}
