
//LOAD ANIMATION
$(document).ready(function(){

TweenMax.from(".profile", 0.6, {opacity:0, skewY:"3deg", y:50, ease: Power1.easeInOut, delay:0.5})

TweenMax.from(".sidenav", 0.6, {opacity:0, y:30, ease: Power1.easeInOut})

TweenMax.from(".detail", 0.6, {opacity:0, skewY:"3deg", y:30, ease: Power1.easeInOut, delay:1})

TweenMax.from(".education", 0.6, {opacity:0, skewY:"3deg", y:30, ease: Power1.easeInOut, delay:2})

});


//scroll support
$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });






// DELAY LOAD
$('#back-a').click(function(e) {
  e.preventDefault();
  setTimeout(function(url) { window.location = url }, 1200, this.href);
});

// back function

$('#back-a').on('click',
  function() {

    TweenMax.to("body",0.3,{backgroundColor:"#64ABB9"})

    TweenMax.to(".profile", 0.6, {opacity:0, skewY:"5deg", y:50, ease: Back.easeOut},0)

  TweenMax.to(".sidenav", 0.6, {opacity:0, y:50, ease: Back.easeOut},0)

  TweenMax.to(".detail",0.8, {opacity:0, skewY:"5deg",y:50, ease: Back.easeOut},0);

  TweenMax.to(".education",0.8, {opacity:0, skewY:"5deg",y:50, ease: Back.easeOut},0);

});



// scroll behaviour

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
