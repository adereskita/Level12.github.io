//LOAD ANIMATION
$(document).ready(function(){

TweenMax.from("#title", 0.6, {opacity:0, skewY:"3deg", y:50, ease: Power1.easeInOut, delay:0.5})

TweenMax.from(".sidenav", 0.6, {opacity:0, y:30, ease: Power1.easeInOut})


TweenMax.from(".education", 0.6, {opacity:0, skewY:"3deg", y:30, ease: Power1.easeInOut, delay:2})

});


//SCROLL TRIGGER SHOW
var controller = new ScrollMagic.Controller();
var duration = 0.75;
var animations = [
  {x:200, opacity:1},
  {rotation:360, opacity:1},
  {scale:0.5, opacity:1, x:400}
]
$('[data-scrollmagic]').each(function(index) {
  var tl = new TimelineMax();
  tl.to("#title", 0.6, {opacity:0, skewY:"3deg", y:30, ease: Power1.easeInOut, delay:1})
;

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.6,
    reverse: false
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});


// DELAY LOAD
$('#back-a').click(function(e) {
  e.preventDefault();
  setTimeout(function(url) { window.location = url }, 1200, this.href);
});


//disapears display

$('#back-a').on('click',
  function() {

    TweenMax.to("body",0.3,{backgroundColor:"#64ABB9"})

    TweenMax.to("#title", 0.6, {opacity:0, skewY:"5deg", y:50, ease: Back.easeOut},0)

  TweenMax.to(".sidenav", 0.6, {opacity:0, y:50, ease: Back.easeOut},0)

  TweenMax.to(".detail",0.8, {opacity:0, skewY:"5deg",y:50, ease: Back.easeOut},0);

  TweenMax.to(".education",0.8, {opacity:0, skewY:"5deg",y:50, ease: Back.easeOut},0);

});


