var className = "inverted";
var className2="blurr";
var scrollBlurr=1;
var el = document.querySelector(".paralaxexp");
var el2 = document.querySelector(".paralaxexp2");
var distanceFromTop =window.pageYOffset + el.getBoundingClientRect().top;
let static=distanceFromTop;
var distanceFromTop2 =window.pageYOffset + el2.getBoundingClientRect().top;
let static2=distanceFromTop2;
el3 = document.querySelector(".paralaxexp3");
var distanceFromTop3=0;

var distanceFromTop3 =window.pageYOffset + el3.getBoundingClientRect().top;
let static3=distanceFromTop3;
var height = el2.offsetHeight;
onresize = (event) => {
    distanceFromTop = window.pageYOffset + el.getBoundingClientRect().top;
    static=distanceFromTop;
    distanceFromTop2 = window.pageYOffset + el2.getBoundingClientRect().top;
    static2=distanceFromTop2;
    distanceFromTop3 = window.pageYOffset + el3.getBoundingClientRect().top;
    static3=distanceFromTop3;
};
window.addEventListener("scroll", function() {
    var distance = window.scrollY;
   if(distance<window.innerHeight){
    document.querySelector(".paralax-header").style.transform = `translateY(${distance *
      1}px)`;
    document.querySelector(
      ".paralax"
    ).style.transform = `translateY(${distance * 0.1}px)`;}
if(distance-static<window.innerHeight/5){
    if(static-window.innerHeight<=distance){
        document.querySelector(
            ".paralax2"
          ).style.transform = `translateY(${(distance-static+window.innerHeight) * 1}px)`;
          document.querySelector(
            ".paralax2in"
          ).style.transform = `translateY(${(distance-static+window.innerHeight) * 0.1}px)`;
    }
    else{
        document.querySelector(
            ".paralax2"
          ).style.transform = `translateY(${(distance-static) * 0}px)`;
    }
}
if(height>window.innerHeight-108){
if(distance-static2<0){
    if(static2-window.innerHeight<=distance){
        document.querySelector(
            ".paralax22"
          ).style.transform = `translateY(${(distance-static2+window.innerHeight) * 1}px)`;
          document.querySelector(
            ".paralax22in"
          ).style.transform = `translateY(${(distance-static2+window.innerHeight) * 0.1}px)`;
    }
    else{
        document.querySelector(
            ".paralax22"
          ).style.transform = `translateY(${(distance-static2) * 0}px)`;
    }
}}
if(distance-static3<window.innerHeight/5){
  if(static3-window.innerHeight<=distance){
      document.querySelector(
          ".paralax23"
        ).style.transform = `translateY(${(distance-static3+window.innerHeight) * 1}px)`;
        document.querySelector(
          ".paralax23in"
        ).style.transform = `translateY(${(distance-static3+window.innerHeight) * 0.1}px)`;
  }
  else{
      document.querySelector(
          ".paralax23"
        ).style.transform = `translateY(${(distance-static) * 0}px)`;
  }
}
  });


  


