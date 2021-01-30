/**
 * Clever Solution
 * @param rectangles{[][]}
 * @returns {boolean}
 */
export let cleverSolution = (rectangles) => {
    let area = 0;
    let topLeft = [rectangles[0][0], rectangles[0][1]];
    let rightBottom = [rectangles[0][2], rectangles[0][3]];
    let corners = new Set();
    let handleCorner = (x, y) => {
        let corner = x + " " + y;
        if (corners.has(corner)) {
            corners.delete(corner);
        } else {
            corners.add(corner);
        }
    }

    for (let rectangle of rectangles) {

        // Calculate topLeft and rightBottom
        if (rectangle[0] < topLeft[0]) {
            topLeft[0] = rectangle[0];
        }
        if (rectangle[1] < topLeft[1]) {
            topLeft[1] = rectangle[1];
        }

        if (rectangle[2] > rightBottom[0]) {
            rightBottom[0] = rectangle[2];
        }
        if (rectangle[3] > rightBottom[1]) {
            rightBottom[1] = rectangle[3];
        }

        // Push corner into set
        handleCorner(rectangle[0], rectangle[1]) // Top left
        handleCorner(rectangle[2], rectangle[3]) // Right bottom
        handleCorner(rectangle[2], rectangle[1]) // Top right
        handleCorner(rectangle[0], rectangle[3]) // Bottom left


        area += calculateArea(rectangle);
    }

    if (area !== calculateArea([topLeft[0], topLeft[1], rightBottom[0], rightBottom[1]])) {
        return false;
    }
    return !((corners.size !== 4) ||
        (!corners.has(topLeft[0] + " " + topLeft[1])) ||
        (!corners.has(rightBottom[0] + " " + rightBottom[1])) ||
        (!corners.has(rightBottom[0] + " " + topLeft[1])) ||
        (!corners.has(topLeft[0] + " " + rightBottom[1])));

}

let calculateArea = (rectangle) => {
    let width = rectangle[2] - rectangle[0];
    let height = rectangle[3] - rectangle[1];
    return width * height;
}

/**
 * This is not a good solution
 * @param rectangles{[][]}
 * @returns {boolean}
 */
export let perfectRectangle = (rectangles) => {

    // Remove negative
    let shouldPlusOnX = 0;
    let shouldPlusOnY = 0;
    let calculatePlus = (isX, value) => {
        let delta = 0 - value;
        if (isX) {
            if (delta > shouldPlusOnX) {
                shouldPlusOnX = delta;
            }
        } else {
            if (delta > shouldPlusOnY) {
                shouldPlusOnY = delta;
            }
        }
    }
    for (let i of rectangles) {
        calculatePlus(true, i[0]);
        calculatePlus(false, i[1]);
        calculatePlus(true, i[2]);
        calculatePlus(false, i[3]);
    }
    for (let i of rectangles) {
        i[0] += shouldPlusOnX;
        i[1] += shouldPlusOnY;
        i[2] += shouldPlusOnX;
        i[3] += shouldPlusOnY;
    }

    // Calculate top left
    let topLeft = [rectangles[0][0],rectangles[0][1]];
    for (let i of rectangles) {
        if (i[0] < topLeft[0]) {
            topLeft[0] = i[0];
        }
        if (i[1] < topLeft[1]) {
            topLeft[1] = i[1];
        }
    }


    // Plot the graph in array
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


    // For displaying the graph
    // for (let j = 0; j < plots.length; j ++) {
    //     let result = "";
    //     for (let i = 0; i < plots[0].length; i ++) {
    //         result += plots[j][i] + " "
    //     }
    //     console.log(result);
    // }

    // Calculate the shape
    for (let i = topLeft[1] * 2; i < plots.length; i ++) {
        for (let j = topLeft[0] * 2; j < plots[0].length; j ++) {
            if (plots[i][j] === 0) {
                return false;
            }
        }
    }

    // Calculate overlap
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

