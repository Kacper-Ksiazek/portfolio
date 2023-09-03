// Tools
import useWindowSizes from "@/hooks/useWindowSizes";

export function useMobileEditMode(): boolean {
    const { width } = useWindowSizes();

    return width < 840;
}
