// Solution for https://leetcode.com/problems/palindrome-number/description/

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

    return Boolean(firstHalf === secondHalf)
};
