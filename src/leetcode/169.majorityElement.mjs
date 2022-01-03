
export let me = (nums) => {
    let dict = {};
    for (let num of nums) {
        if(num in dict) {
            dict[num] += 1;
        }else {
            dict[num] = 1;
        }
    }
    let majority = nums[0]
    let quantity = 0;
    for (let i in dict) {
        if (dict[i] > quantity) {
            quantity = dict[i]
            majority = i
        }
    }
    return majority
}
