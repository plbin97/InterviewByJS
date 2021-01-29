
export let perfectRectangle = (rectangles) => {
    let topLeft = [rectangles[0][0],rectangles[0][1]];
    for (let i of rectangles) {
        if (i[0] < topLeft[0]) {
            topLeft[0] = i[0];
        }
        if (i[1] < topLeft[1]) {
            topLeft[1] = i[1];
        }
    }

    let plots = [[0]];
    let addPlotRight = () => {
        for (let i of plots) {
            i.push(0);
            i.push(0);
        }
    }
    let addPlotBottom = () => {
        let arr = [];
        let arr2 = []
        for (let i of plots[0]) {
            arr.push(0);
            arr2.push(0)
        }
        plots.push(arr);
        plots.push(arr2);
    }
    for (let rectangle of rectangles) {
        while (plots[0].length < rectangle[2] * 2) {
            addPlotRight();
        }
        while (plots.length < rectangle[3] * 2) {
            addPlotBottom();
        }
        for (let i = rectangle[0]; i <= rectangle[2]; i = i + 0.5) {
            for (let j = rectangle[1]; j <= rectangle[3]; j = j + 0.5) {
                plots[j * 2][i * 2] ++;
            }
        }
    }
    // For debug
    // for (let j = 0; j < plots.length; j ++) {
    //     let result = "";
    //     for (let i = 0; i < plots[0].length; i ++) {
    //         result += plots[j][i] + " "
    //     }
    //     console.log(result);
    // }

    for (let i = topLeft[1] * 2; i < plots.length; i ++) {
        for (let j = topLeft[0] * 2; j < plots[0].length; j ++) {
            if (plots[i][j] === 0) {
                return false;
            }
        }
    }

    for (let i = topLeft[1] * 2; i < plots.length - 2; i ++) {
        for (let j = topLeft[0] * 2; j < plots[0].length - 2; j ++) {
            if (
                plots[i][j] > 1 &&
                plots[i + 1][j] > 1 &&
                plots[i + 2][j] > 1 &&
                plots[i][j + 1] > 1 &&
                plots[i + 1][j + 1] > 1 &&
                plots[i + 2][j + 1] > 1 &&
                plots[i][j + 2] > 1 &&
                plots[i + 1][j + 2] > 1 &&
                plots[i + 2][j + 2] > 1
            ) {
                return false
            }
        }
    }

    return true;
}

let arr = [[0,0,4,1],[7,0,8,2],[5,1,6,3],[6,0,7,2],[4,0,5,1],[4,2,5,3],[2,1,4,3],[-1,2,2,3],[0,1,2,2],[6,2,8,3],[5,0,6,1],[4,1,5,2]];
console.log(perfectRectangle(arr))
