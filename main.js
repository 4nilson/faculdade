const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Testando';
ul.children[1].innerText = 'Oi gostoso';
ul.lastElementChild.innerHTML = '<h2>Deixa eu pegar no seu</h2>';