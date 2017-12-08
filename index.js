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
   
}
