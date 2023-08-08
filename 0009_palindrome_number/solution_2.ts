function isPalindrome(x: number): boolean {
    // If x < 0 it can't be a palindrome
    // Any number that ends in 0 can't be a palindrome unless it is 0
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = (x / 10) | 0;
    }

    // Get rid of the middle digit if the length is odd
    return x == revertedNumber || x == revertedNumber / 10;
};
