const twoSum = (nums: number[], target: number) => {
    // First approach

    // const result = []

    // nums.map((n, ix) => {
    //     if (n + nums[ix + 1] === target) result.push(ix, ix+1)
    // })

    // return result

    // Second approach
    // Use a hash map to consider all pairs
    // I had to learn about hashmaps for this, so this will look fairly boilerplate-y
    const map = new Map()

    for (let ix = 0; ix < nums.length; ix++) {
        // Use a complement to define what we are looking for
        const c = target - nums[ix]

        if (map.has(c)) {
            return [map.get(c), ix]
        }

        // If we didn't find the complement, add the kv pair to the map and continue
        map.set(nums[ix], ix)
    }

    // If there is no match return an empty array
    return []
};
