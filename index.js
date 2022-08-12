let filterFn = function (arr, arg) {
    let arrFilt = [];
    for (let i = 0; i < arr.length; i++) {
        if (arg === arr[i]) {
            arrFilt.push(arr[i]);
        };
    };
    return arrFilt;
};