/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let fac = 1;
    if (n != 0){
        for(let i = 1; i <= n; i++){
            fac = fac * i;
        }
    }
    return fac;
}
