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

var Seconditem=document.querySelector('.list-group-item:nth-child(2)');
Seconditem.style.backgroundColor='green';
var Thirditem=document.querySelector('.list-group-item:nth-child(3)');
Thirditem.style.visibility='hidden';


var li=document.querySelectorAll('list-group-item');
li[2].style.backgroundColor='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}