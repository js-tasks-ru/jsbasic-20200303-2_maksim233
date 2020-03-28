/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    friends.forEach(el =>{
        let li = document.createElement("li");
        li.innerHTML = el.firstName +' '+ el.lastName;
        ul.appendChild(li);
    });
    return ul;
}
