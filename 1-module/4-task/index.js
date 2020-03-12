/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    return (/1xBet/i.test(str))||(/XXX/i.test(str));
 }
