const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function sumRow(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            reject("Cannot sum an empty array");
        }
        let count = 0;
        for(const num of arr) {
            count += num;
        }
        resolve(count);
    })
}

function sum2DArray2(arr:number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            reject("Cannot sum an empty array")
        }

        let promises = new Array<Promise<number>>(arr.length);
        let i = 0;
        for(const row of arr) {
            promises[i] = sumRow(row);
            i++;
        }
        Promise.all(promises).then((results) => {
            let total = 0;
            results.forEach((result) => {
                total += result;
            })
            resolve(total);
        });
    });
}

const sum = sum2DArray2(array2D_1);
sum.then((res) => console.log(res)).catch((err) => console.error(err));