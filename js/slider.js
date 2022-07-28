var j=0;
document.querySelector(".nazad").style.opacity="0.5";
var wid=document.querySelector(".slider-coments");
var width = wid.offsetWidth;
document.querySelector(".naprid").addEventListener("click", function(){
  document.querySelector(".nazad").style.opacity="1";
  if(width>680*j){
  j++;
  wid.scrollTo(680*j,0)
}
if(width<680*j){
  document.querySelector(".naprid").style.opacity="0.5";
}
});
document.querySelector(".nazad").addEventListener("click", function(){
  document.querySelector(".naprid").style.opacity="1";
  if(j!=0){
  j--;
  wid.scrollTo(680*j,0)
  }
  if(j==0){
    document.querySelector(".nazad").style.opacity="0.5";
  }
    });


    var i=0;
document.querySelector(".nazad2").style.opacity="0.5";
var wid2=document.querySelector(".slider");
var width2 = wid2.offsetWidth;
console.log(width2,width)
document.querySelector(".naprid2").addEventListener("click", function(){
  document.querySelector(".nazad2").style.opacity="1";
  if(width2>500*i){
  i++;
  wid2.scrollTo(500*i,0)
}
if(width2<500*i){
  document.querySelector(".naprid2").style.opacity="0.5";
}
});
document.querySelector(".nazad2").addEventListener("click", function(){
  document.querySelector(".naprid2").style.opacity="1";
  if(i!=0){
  i--;
  wid2.scrollTo(500*i,0)
  }
  if(i==0){
    document.querySelector(".nazad2").style.opacity="0.5";
  }
    });
    addEventListener('load', (event) => {
        wid2.scrollTo(0,0)
        i=0;
        j=0;
        wid.scrollTo(0,0);


    });
    