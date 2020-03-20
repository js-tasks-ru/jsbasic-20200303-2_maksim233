/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let arr=[];
    let arr2=[];
    let upper;
    arr = str.split('-');
    arr.forEach((el)=>{
      if (arr.indexOf(el) > 0){
        upper = el[0].toUpperCase();
        el = el.slice( 1, el.length)
        el = upper + el;
      }
      arr2.push(el);
    });
    let str2 = arr2.join('');
    return str2;
  }
