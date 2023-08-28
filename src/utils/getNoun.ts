export function getAsteroidNoun(count: number) {
    const digit = count % 10;
    if (digit === 0 || digit >= 5) {
        return "астероидов";
    } else if (digit === 1) {
        return "астероид"
    } else if (digit < 5) {
        return "астероида";
    }
}