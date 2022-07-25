var className = "inverted";
var className2="blurr";
var scrollBlurr=1;
var win = window;
var scrollTrigger=win.innerHeight-108;

onresize = (event) => {
    scrollTrigger=win.innerHeight-108;
};
window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollBlurr || window.pageYOffset >= scrollBlurr) {
    document.getElementsByClassName('navbar')[0].classList.add(className2);
  } else {
    document.getElementsByClassName('navbar')[0].classList.remove(className2);
  }
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName('navbar')[0].classList.add(className);
    document.getElementsByClassName('none')[0].classList.add('flex-imp');
    document.getElementsByClassName('flex')[0].classList.add('none-imp');
  } else {
    document.getElementsByClassName('navbar')[0].classList.remove(className);
    document.getElementsByClassName('none')[0].classList.remove('flex-imp');
    document.getElementsByClassName('flex')[0].classList.remove('none-imp');
  }
};




