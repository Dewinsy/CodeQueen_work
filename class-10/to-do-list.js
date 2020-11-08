//DOM manipulation



const list = document.createElement('ul');

const item1 = document.createElement('li');
item1.innerHTML = 'Take a shower';

const item2 = document.createElement('li');
item2.innerHTML = 'Have breakfast';

list.appendChild(item1);
list.appendChild(item2);

const mainDiv = document.getElementById('main');
mainDiv.appendChild(list);


