type Mode = "CSS_REFERENCES" | "SELECTORS";

type Reference = {
    ref_value: string;
    /** ID by default */
    ref_type?: "ID" | "CSS_CLASS";
};

interface HTMLStructure<T> {
    [key: string]: T | HTMLStructure<T>;
}

type HTMLStructureConstructor = HTMLStructure<Reference>;

type OutputStructure<T extends HTMLStructure<Reference>> = {
    [key in keyof T]: T[key] extends HTMLStructure<Reference> ? OutputStructure<T[key]> : string;
};

function isHTMLStructureConstructor(a: Record<any, any>): a is HTMLStructureConstructor {
    return !("ref_value" in a);
}

export class HTMLStructureOrganizer<T extends HTMLStructure<Reference>> {
    public SELECTORS: OutputStructure<T> = {} as OutputStructure<T>;
    public CSS_REFERENCES: OutputStructure<T> = {} as OutputStructure<T>;

    private readonly SELECTORS_ALIAS: string;

    public constructor(params: { alias: string; structure: T }) {
        this.SELECTORS_ALIAS = params.alias;

        this.processHTMLStructure({
            mode: "CSS_REFERENCES",
            structure: params.structure,
            output: this.CSS_REFERENCES,
        });

        this.processHTMLStructure({
            mode: "SELECTORS",
            structure: params.structure,
            output: this.SELECTORS,
        });
    }

    private processHTMLStructure(params: {
        structure: HTMLStructureConstructor; //
        mode: Mode | "SELECTORS";
        //
        output?: HTMLStructure<string>;
    }): void {
        const { mode, structure } = params;

        const result: HTMLStructure<string> = params.output ?? {};

        Object.entries(structure).forEach(([key, value]) => {
            if (isHTMLStructureConstructor(value)) {
                result[key] = {} as OutputStructure<typeof value>;
                this.processHTMLStructure({
                    mode,
                    structure: value,
                    output: result[key] as HTMLStructure<string>,
                });
            } else {
                result[key] = this.formatAttributeValue(value, mode);
            }
        });
    }

    private formatAttributeValue({ ref_type, ref_value }: Reference, mode: Mode): string {
        const refValueWithAliast = `${this.SELECTORS_ALIAS}-${ref_value}`;

        if (mode === "CSS_REFERENCES") return refValueWithAliast;
        else {
            const selector = ref_type === "CSS_CLASS" ? "." : "#";
            return selector + refValueWithAliast;
        }
    }
}
