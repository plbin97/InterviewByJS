export let destinationToOrigin = (a,b,c,d) => {
    let point = [c,d]
    while (point[0] >= a && point[1] >= b) {
        if (a === point[0] && b === point[1]) {
            return true;
        }
        if (point[0] > point[1]) {
            point[0] = point[0] - point[1];
        } else if (point[1] > point[0]) {
            point[1] = point[1] - point[0];
        } else {
            return (a === 0 && b === point[0]) ||
                (a === point[0] && b === 0);
        }
    }
    return false;
}

export let byDFS = (a,b,c,d) => {
    let pointsQueue = [];
    pointsQueue.push([a,b]);
    while (pointsQueue.length !== 0) {
        let point = pointsQueue.pop();
        let nextPointAlpha = [point[0] + point[1], point[1]];
        let nextPointBeta = [point[0], point[0] + point[1]];
        if (nextPointAlpha[0] <= c && nextPointAlpha[1] <= d) {
            if (nextPointAlpha[0] === c && nextPointAlpha[1] === d) {
                return true;
            }else {
                pointsQueue.push(nextPointAlpha);
            }
        }

        if (nextPointBeta[0] <= c && nextPointBeta[1] <= d) {
            if (nextPointBeta[0] === c && nextPointBeta[1] === d) {
                return true;
            }else {
                pointsQueue.push(nextPointBeta);
            }
        }
    }
    return false;
}
