// This function picks the distinct elements in 2 arrays and sums them up

function distinctSum(array1, array2) {
    const distinctElements = []

    for (const index in array1) {
        if (array2.includes(array1[index]) === false) {distinctElements.push(array1[index])
        }
    }

    for (const index in array2) {
        if (array1.includes(array2[index]) === false) {distinctElements.push(array2[index])}
    }


    let sum = 0
    for (const element of distinctElements) {
        sum += element
    }
    return sum

}






// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]




console.log(distinctSum([3, 1, 7, 9], [2, 4, 1, 9, 3]))
