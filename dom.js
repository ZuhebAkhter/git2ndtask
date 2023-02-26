// var headertitle=document.getElementById('header-title');
// headertitle.style.border ='solid 3px #000';
// var titles=document.getElementById('title1');
// titles.style.fontFamily='bold';
// titles.style.color='green';

// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='Green';
// items[0].style.fontFamily='bold';
// items[1].style.fontFamily='bold';
// items[2].style.fontFamily='bold';
// items[3].style.fontFamily='bold';


// var li=document.getElementsByTagName('li');
// for(i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='red';
// }


// var items=document.getElementsByClassName('list-group-item');
// for(i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='red';
// }

// var Seconditem=document.querySelector('.list-group-item:nth-child(2)');
// Seconditem.style.backgroundColor='green';
// var Thirditem=document.querySelector('.list-group-item:nth-child(3)');
// Thirditem.style.visibility='hidden';


// var li=document.querySelectorAll('list-group-item');
// li[2].style.backgroundColor='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
// }

// //Parent element
// var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);


// lastelementchild
// console.log(itemList.lastElementChild);


// last child
// console.log(itemList.lastChild);

// firstelementchild
// console.log(itemList.firstElementChild);

// firstchild
// console.log(itemList.firstChild);

// nextsibling
// console.log(itemList.nextSibling);

// nextelementsibling
// console.log(itemList.nextElementSibling);

// previoussibling
// console.log(itemList.previousSibling);

// previouselementsibling
// console.log(itemList.previousElementSibling);

// //createelement
// var newDiv = document.createElement('div');

// newDiv.className='hello';
// newDiv.id = 'hello1';

// //setattribute
// newDiv.setAttribute('title','hello new attrbute');

// var newDivText=document.createTextNode('hello');

// //appendchild
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv,h1);

// var parentNode=document.getElementById('items');
// parentNode.innerHTML='<li>Hello</li>' + parentNode.innerHTML

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var description = document.getElementById('description').value;


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(description));


  // Create del button element
  var deleteBtn = document.createElement('button');


  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));


  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }