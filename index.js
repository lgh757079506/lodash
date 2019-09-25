window._ = {}
/**
 * array (Array): 需要处理的数组
 * [size=1] (number): 每个数组区块的长度
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * **/
_.chunk = function(array = [], size = 1) {
    const arrayLen = array == null ? 0 : array.length
    size = Math.max(size, 1)

    if (!arrayLen) {
        console.log('数组有问题')
        return
    }

    if (size < 1) {
        console.log('size大小有问题')
        return
    } else if (size > arrayLen) {
        size = arrayLen
    }

    let result = []

    for (let i = 0, forLen = Math.ceil(arrayLen / size); i < forLen; i++) {
        let sizeArr = []

        if (array.length > size) {
            sizeArr = array.splice(0, size)
            result.push(sizeArr)
        } else {
            result.push(array)
        }
    }

    return result
}
/**
 * array (Array): 需要处理的数组
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
 * **/
_.compact = function(array = []) {
    let result = []

    if (array == null) {
        return result
    }

    for(let i = 0, len = array.length; i < len; i++) {
        const currentItem = array[i]
        
        if (currentItem) {
            result.push(currentItem)
        }
    }
    return result
}