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
/**
 * array (Array): 被连接的数组。
 * [values] (...*): 连接的值。
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 * **/
_.concat = function(array, value) {
    var length = arguments.length;
    if (!length) {
        return [];
    }

    var args = [],
        index = length;
    
    if (index - 1 === 1) {
        const argumentsArray = arguments[1]
        
        if (Array.isArray(argumentsArray)) {
            args = argumentsArray
        } else {
            args.push(argumentsArray)
        }
    } else if (index - 1 > 1) {
        while (index--) {
            args[index - 1] = arguments[index];
        }
    } else {
        args = 0
    }

    for(let i = 0, arrLen = args.length; i < arrLen; i++) {
        array.push(args[i])
    }

    return array
}
/**
 * array (Array): 要查询的数组。
 * [n=1] (number): 要去除的元素个数。
 * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * **/
_.drop = function(array, n) {
    const length = array == null ? 0 : array.length

    if (!length) {
        return  []
    } else {
        return _.slice(array, n < 0 ? 0 : n, length)
    }
}

/**
* array (Array): 要裁剪数组。
* [n=1] (number): 要去除的元素个数。
 * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）返回array剩余切片。
 * **/
_.dropRight = function(array, n = 1 ) {
    const length = array == null ? 0 : array.length

    if (!length) {
        return  []
    } else {
        return _.slice(array, 0, n < 0 ? 0 : n)
    }
}

/**
* array (Array): 要裁剪数组。
* [start=0] (number): 开始位置。
* [end=array.length] (number): 结束位置。
 * 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。
 * **/
_.slice = function(array, start, end) {
    let length = array == null ? 0 : array.length
    if (!length) {
        return []
    }
    start = start == null ? 0 : start
    end = end === undefined ? length : end

    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
        end += length
    }
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0

    let index = -1
    const result = new Array(length)
    while (++index < length) {
        result[index] = array[index + start]
    }
    return result
}