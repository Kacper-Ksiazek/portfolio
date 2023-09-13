/**
 * Simulates the behaviour of XOR logic gate.
 */
export function XOR(a: boolean, b: boolean) {
    return a != b;
    // Above version works identicaly, but cleaner
    // return (a && !b) || (!a && b);
}
