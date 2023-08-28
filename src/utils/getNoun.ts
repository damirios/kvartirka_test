export function getAsteroidNoun(count: number) {
    const digit = count % 10;
    if (digit === 0 || digit >= 5 || (count % 100 >= 10 && count % 100 <= 20)) {
        return "астероидов";
    } else if (digit === 1) {
        return "астероид"
    } else if (digit < 5) {
        return "астероида";
    }
}

export function getLunarUnitsNoun(count: number) {
    const digit = count % 10;
    if (digit === 0 || digit >= 5 || (count % 100 >= 10 && count % 100 <= 20)) {
        return "лунных орбит";
    } else if (digit === 1) {
        return "лунная орбита"
    } else if (digit < 5) {
        return "лунные орбиты";
    }
}