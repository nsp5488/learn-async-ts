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

async function sum2DArray2(arr:number[][]): Promise<number> {
    
        if(arr.length == 0) {
            throw new Error("Cannot sum an empty array")
        }

        let promises = new Array<Promise<number>>(arr.length);
        let i = 0;
        for(const row of arr) {
            promises[i] = sumRow(row);
            i++;
        }
        try {
            const rows:number[] = await Promise.all(promises);

            let total = 0;
            for (const num of rows) {
                total += num;
            }
            return total;
        } catch(err) {
            throw new Error(`Failed to sum array: ${err}`)
        }
}

const sum = sum2DArray2(array2D_1);
sum.then((res) => console.log(res)).catch((err) => console.error(err));
