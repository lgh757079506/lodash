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

    for ( let i = 0; i < Math.ceil(arrayLen / size); i++ ) {
        let sizeArr = []

        if (array.length <= size) {
            sizeArr = sizeArr.concat(array)
        } else {
            sizeArr = array.splice(0, size)
        }
        result.push(sizeArr)
    }

    return result
}