function BodySetBackgroundcolor(color){
  document.querySelector('body').style.backgroundColor=color;
}
function BodySetcolor(color){
    document.querySelector('body').style.color= color;

}
function LinksSetColor(color){
   var alist = document.querySelectorAll('a');
   var i = 0;
   while(i < alist.length){
     alist[i].style.color = color;
     i = i + 1;
}
}
function nightDayHandler(self){
var target = document.querySelector('body');
if (self.value ==='night'){
BodySetBackgroundcolor('black');
BodySetcolor('white');
self.value ='day';

LinksSetColor('powderblue');

}
else{
BodySetBackgroundcolor('white');
BodySetcolor('black');
self.value ='night';

LinksSetColor('blue');
}
}
