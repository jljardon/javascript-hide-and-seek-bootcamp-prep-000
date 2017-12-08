
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

   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

   for (let i = 0; i < lis.length; i++) {
     lis[i].innerHTML = (i + 4).toString()
   }

}
