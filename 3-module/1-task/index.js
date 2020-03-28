/**
/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let str ;
    const users = data.filter(dat=> dat.age <= age);
    let name = users.map(user => user.name + ", "+ user.balance)
    name.forEach(element => {
        if (str ===undefined){
            str = element;
        } else{
            str = str +'\n'+element;
        }
        });
    return str;    
  }
