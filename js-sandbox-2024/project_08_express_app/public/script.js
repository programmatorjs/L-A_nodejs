function updateTable() {
const wrapper = document.querySelector('#list');
const informer = document.querySelector('#info');
const tableItems = [];
const requestOptions = {method: "GET", redirect: "follow"};
  // informer.innerHTML = `<b style="color: green;">Загрузка данных с сервера...</b>`;
  wrapper.innerHTML = '';
  fetch("/api/v1.0/contacts", requestOptions).then((response) => {
    return response.json();
  }).then((result) => {
    result.forEach(row=>{
        tableItems.push(`<tr><td>${row.id}</td><td>${row.name}</td><td>${row.phone}</td></tr>`);
    });

    const table = `
    <table width="50%" border="1" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                ${tableItems.join('\n')}
            </tbody>
        </table>
    `;
    wrapper.innerHTML = table;

    informer.innerHTML = '';

  }).catch((error) => {
    // console.error('ERROR?', error);
    informer.innerHTML = `<b style="color: red;">Ошибка: ${error.toString()}</b>`;
  });
}

document.querySelector('#btn-update').addEventListener('click', updateTable);

updateTable();


document.querySelector('#contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем обновление страницы

  const id = document.querySelector('#id').value;
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name, phone })
  };

  fetch('/api/v1.0/contacts/', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      updateTable(); // Обновляем таблицу после добавления контакта
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});