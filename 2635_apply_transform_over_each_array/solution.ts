const arr = [1, 3, 5]
const add_two = (n: number) => n + 2
const constant = (n: number) => n
const add_index = (n: number, ix: number) => n + ix

function map(arr: number[], fn: (n: number, ix: number) => number): number[] {
    const new_arr: number[] = []

    for (let ix = 0; ix < arr.length; ix++) {
        let arr_val = arr[ix]
        new_arr.push(fn(arr_val, ix))
    }

    return new_arr
};

const add_two_arr = map(arr, add_two)
const constant_arr = map(arr, constant)
const add_index_arr = map(arr, add_index)

console.log(add_two_arr)
console.log(constant_arr)
console.log(add_index_arr)
