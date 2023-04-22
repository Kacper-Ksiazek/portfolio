/**
 *  Compute the ratio of two numbers
 *
 *  **Result**: nominator / denominator
 */
export function ratio(numerator: number, denominator: number): `${string}%` {
    return `${Number((numerator * 100) / denominator).toFixed(2)}%`;
}
