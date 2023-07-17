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

type CSSReferencesStructure<T extends HTMLStructure<Reference>> = {
    [key in keyof T]: T[key] extends HTMLStructure<Reference> ? CSSReferencesStructure<T[key]> : string;
};

type SelectorsStructure<T extends HTMLStructure<Reference>> = {
    _EVERY: string;
} & {
    [key in keyof T]: T[key] extends HTMLStructure<Reference> ? SelectorsStructure<T[key]> : string;
};

function isHTMLStructureConstructor(a: Record<any, any>): a is HTMLStructureConstructor {
    return !("ref_value" in a);
}

export class HTMLStructureOrganizer<T extends HTMLStructure<Reference>> {
    public SELECTORS: SelectorsStructure<T> = {} as SelectorsStructure<T>;
    public CSS_REFERENCES: CSSReferencesStructure<T> = {} as CSSReferencesStructure<T>;

    private readonly SELECTORS_ALIAS: string;

    public constructor(params: { alias: string; structure: T }) {
        this.SELECTORS_ALIAS = params.alias;

        this.CSS_REFERENCES = this.processHTMLStructure({
            mode: "CSS_REFERENCES",
            structure: params.structure,
        }) as CSSReferencesStructure<T>;

        this.SELECTORS = this.processHTMLStructure({
            mode: "SELECTORS",
            structure: params.structure,
        }) as SelectorsStructure<T>;
    }

    private processHTMLStructure(params: {
        structure: HTMLStructureConstructor; //
        mode: Mode | "SELECTORS";
    }): HTMLStructure<string> {
        const { mode, structure } = params;

        const result: HTMLStructure<string> = {};

        Object.entries(structure).forEach(([key, value]) => {
            if (isHTMLStructureConstructor(value)) {
                result[key] = this.processHTMLStructure({
                    mode,
                    structure: value,
                });
            } else {
                result[key] = this.formatAttributeValue(value, mode);
            }
        });

        if (mode === "SELECTORS") {
            result._EVERY = this.createOneSelectorToEveryItem(result as any);
        }

        return result;
    }

    private formatAttributeValue({ ref_type, ref_value }: Reference, mode: Mode): string {
        const refValueWithAliast = `${this.SELECTORS_ALIAS}-${ref_value}`;

        if (mode === "CSS_REFERENCES") return refValueWithAliast;
        else {
            const selector = ref_type === "CSS_CLASS" ? "." : "#";
            return selector + refValueWithAliast;
        }
    }

    private createOneSelectorToEveryItem(structure: SelectorsStructure<T>): string {
        let result: string = "";
        const appendToResult = (chunk: string) => (result += result === "" ? chunk : `, ${chunk}`);

        Object.entries(structure).forEach(([key, value]) => {
            if (typeof value === "object") appendToResult(value._EVERY);
            else appendToResult(value);
        });

        return result;
    }
}
