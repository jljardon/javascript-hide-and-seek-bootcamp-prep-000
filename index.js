
function getFirstSelector(selector){
   return document.querySelector(selector);
}

function nestedTarget(){
   return document.getElementById('app').querySelector('#nested');
}

function deepestChild(){
   return document.getElementById('grand-node').querySelector('div div div div div');
}

function increaseRankBy(n){
   console.log = (`Begin function`);
   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
   console.log = (`Got list`);
   for (let i = 0; i < lis.length; i++) {
      console.log = (`Begin loop`);
      console.log=(`${lis[i].innerHTML}   ${(i + n).toString()} `);
     lis[i].innerHTML = (i + n).toString();
     console.log = (`${(i + n).toString()}`);
   }

}
