// two algorithms

// A function to calculate the dot product of 2 arrays
// A function to determine if the dot product of 2 arrays = 0

function dotProduct(array1, array2) {
    if (array1.length !== array2.length) return

    const products = []

    for (const index in array1) {
        products.push(array1[index] * array2[index])
        
    }
      
   return products.reduce((sum, element) => sum += element, 0)
}
// where v1 is [1,2,3] and v2 is [4,5,6]

console.log(dotProduct([1,2,3], [4,5,6]))




// Orthogonal
function isOrthogonal(array1, array2) {
    return dotProduct(array1, array2) === 0


}
console.log(isOrthogonal([1,2,3], [4,5,6]))