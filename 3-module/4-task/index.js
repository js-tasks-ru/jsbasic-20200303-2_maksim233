/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  const arrNames = [];
  users.forEach(element => {
    arrNames.push(element.name); 
  });
return arrNames;
}


