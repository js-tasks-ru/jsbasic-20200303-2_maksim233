/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    let arr2 = [];
    arr.forEach(el => {
        if ((el >= a)&&(el <=b)){
            arr2.push(el);
        }
    });
    return arr2;
}
