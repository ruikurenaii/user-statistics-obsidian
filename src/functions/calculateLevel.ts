// yes, pretty much based from the current osu! level system.
function getLevelFromScore(score: number): number {
    function formula(level: number): number {
        return Math.floor(
            (5000 / 3) * (4 * Math.pow(level, 3) - 3 * Math.pow(level, 2) - level) +
            Math.floor(1.25 * Math.pow(1.8, level - 60))
        );
    }

    let low = 1;
    let high = 2147483647;
    let mid: number;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        const calcScore = formula(mid);

        if (calcScore === score) return mid;
        if (calcScore < score) low = mid + 1;
        else high = mid - 1;
    }

    return high;
}
