/* Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?
*/

/*
const nums = [121, -121, 10, 67345247, 9876543456789, 9999, 4321, 4334]

const isOdd = (x: number): boolean => { return Boolean(x & 1); };

function isPalindrome(x: number): boolean {
    // 121, -121, 10, 9999, 4321, 4334

    // Get the length of the number without converting it to a string by measuring it's base 10 logarithm
    const len = Math.ceil(Math.log10(Math.abs(x + 1)));
    const arr = Array.from(String(Math.abs(x)))

    // Make an array of each half of the number - 1
    // Reverse the second array
    // Compare the two arrays

    // Looks like getting an array or slicing a number without converting to string is hard
    // Let's finish using string first

    const halfLen = Math.floor(len / 2)
    let firstHalf: number
    let secondHalf: number

    // A single number can't be a palindrome
    if (len < 1) return false

    if (isOdd(len) && len > 1) {
        console.log(`len: ${len}`, `halfLen: ${halfLen}`)
        console.log(arr, arr.slice(0, halfLen))
        firstHalf = Number(arr.slice(0, halfLen))
        // Divide the array length in half and round up, this will be the middle
        // const middle = Number(arr[Math.ceil(len / 2)])
        // I realized at this point that we don't even need the middle number
        secondHalf = Number(arr.slice(-halfLen).reverse())
        console.log(firstHalf, secondHalf, firstHalf === secondHalf)
    } else {
        firstHalf = Number(arr.slice(len - 1))
        secondHalf = Number(arr.reverse().slice(len - 1))
        console.log(firstHalf, secondHalf, firstHalf === secondHalf)
    }

    return Boolean(firstHalf === secondHalf)
};

const lens = nums.map(num => isPalindrome(num))

console.log(lens)
*/

/*
const nums = [121, -121, 10, 67345247, 9876543456789, 9999, 4321, 4334]

const isOdd = (x: number): boolean => { return Boolean(x & 1); };

function isPalindrome(x: number): boolean {
    if (x < 0) return false

    const len = Math.ceil(Math.log10(x + 1));
    if (len < 2) return true

    const arr = Array.from(String(x))
    const halfLen = Math.floor(len / 2)

    let f: string[]
    let s: string[]
    let firstHalf: number
    let secondHalf: number

    f = arr.slice(0, halfLen)
    s = arr.slice(-halfLen).reverse()
    firstHalf = Number(f.join(''))
    secondHalf = Number(s.join(''))

    console.log(`
Arr: ${arr}, len: ${len}, halfLen: ${halfLen},
firstHalf: ${firstHalf} (${f}), secondHalf: ${secondHalf} (${s}),
res: ${firstHalf === secondHalf}`)

    return Boolean(firstHalf === secondHalf)
};

const lens = nums.map(num => isPalindrome(num))

console.log(lens)
 */
