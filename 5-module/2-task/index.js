/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  // debugger
  this.el = document.createElement('table');
  const thead = this.el.insertAdjacentHTML('beforeend', '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>' );
  this.el.insertAdjacentHTML('beforeend', '<tbody></tbody>' );

  function buildTable(el){
    const tbody = el.querySelector('tbody');
    tbody.innerHTML = items.map((list, num) =>{
       let row = '';
      for(let key of Object.keys(list)){
        console.log(key);
        row+=`<td>${list[key]}</td>` ;
      }
      return `<tr>${row}</tr>`
    }).join('');
  }


  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    console.log("СОРТ ПОШЕЛ!");
    items = items.sort((a, b) =>{
      const keyA = Object.keys(a)[column];
      const keyB = Object.keys(b)[column];
      if(desc){
        return a[keyA] < b[keyB] ? 1 : -1;
      }
      return a[keyA] > b[keyB] ? 1 : -1;
    });
    buildTable(this.el);
  };
  buildTable(this.el);
}