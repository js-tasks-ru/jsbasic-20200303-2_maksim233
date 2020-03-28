/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

    let trs = table.getElementsByTagName('tr');
    let i = 0;
   for(let tr of trs){
     td = tr.getElementsByTagName('td')[i];
     td.style.backgroundColor = 'red';
     i++;
   }  
   }
