const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkRowForNegative(arr: number[]): Promise<string> {
    return new Promise((resolve, reject) => {
        for(const num of arr) {
            if(num < 0) {
                resolve(`Found a negative number: ${num}`)
            }
        }
        reject("Did not find a negative number")
    })
}

function check2DArrayForNegative(arr:number[][]): Promise<string> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            reject("Cannot check an empty array")
        }

        let promises = new Array<Promise<string>>(arr.length);
        let i = 0;
        for(const row of arr) {
            promises[i] = checkRowForNegative(row);
            i++;
        }
        Promise.any(promises).then((result) => {
            resolve(result);
        });
    });
}

const result = check2DArrayForNegative(array2D_3);
result.then((res) => console.log(res)).catch((err) => console.error(err));
