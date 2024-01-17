function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export function generateAliasFromValue(alias: string) {
    return alias
        .replace(/_|-/g, " ") //
        .split(" ")
        .map(capitalizeFirstLetter)
        .join(" ")
}
