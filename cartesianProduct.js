// Big O(m*n) m, n length of the given arrays
function curtesianProduct(arr1, arr2) {
    const product = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            product.push([arr1[i], arr2[j]])
        }
    }
    console.log(product)
}

curtesianProduct([1, 2, 3], [3, 2])