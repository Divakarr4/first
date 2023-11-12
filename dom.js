// //EXAMINE THE DOCUMENT OBJECT

// //console.dir(document)

// // console.log(document.url);
// // console.log(document.title);

// document.title="Cart";
// // document.all[10].textContent='hello';
// // console.log(document.forms);

// var headerTitle = document.getElementById('header-title');

// var header = document.getElementById('main-header');

// var additems = document.getElementById('additems');
// console.log(headerTitle);

// headerTitle.textContent='Hello please add items';
// headerTitle.style.color= 'blue';

// header.style.borderBottom = 'solid 6px black'

// additems.style.color='green';
// additems.style.fontWeight='bold';

let items = document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor='green';

for(var i=0; i < items.length;i++){
     items[i].style.fontWeight='bold';
 }



