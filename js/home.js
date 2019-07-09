
// parallax function

TweenMax.from(".home-info", 0.6, {opacity:0, skewY:"3deg", y:30, ease: Power1.easeInOut, delay:0.5})
TweenMax.to("home-info", 0.6, {opacity:0})

TweenMax.from("footer", 0.6, {opacity:0, skewY:"3deg", y:30, ease: Power1.easeInOut, delay:1.9})
TweenMax.to("footer", 0.6, {opacity:0})

TweenMax.from(".nav",0.8, {opacity:0, skewY:"3deg", y:50, ease: Back.easeOut, delay:1.3}, 0.1);
TweenMax.to("nav", 0.6, {opacity:0})


var list=$('.nav');

var layer=$('.nav');

layer.mousemove(function(e){
           var valueX=(e.pageX * -1 / 5); 
           var valueY=(e.pageY * 0); 
          
           TweenMax.to(list, 1.5, {x:valueX, ease: Back.easeOut});
          
           TweenMax.to(list, 0.8, {x:140});
            
            // list.css({
            //     'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
            // });
        });

//if the page loaded then list is animated
layer.ready(function(){

	TweenMax.from(list, 3, {x:140});
  TweenMax.to(list, 3, {x:140});
  TweenMax.from("body", 1, {backgroundColor:'#64ABB9'});
	TweenMax.to(list, 1.5, {scale:1.05, delay:2.2});

  $(this).css("background-color", "#64ABB9");

});

// for mouse interactive Background changing 

var tl = new TimelineLite({paused:true});
var t2 = new TimelineLite({paused:true});
var t3 = new TimelineLite({paused:true});

// TODO ANIMATION

tl.from("body", 0.5, {backgroundColor:'#64ABB9'});
tl.to("body", 0.5, {backgroundColor:'#363030'},0);
tl.staggerTo(["#nav-info li a","#name","#name-detail","footer a"], 0.5, 
  {color:"#F94444"},0)

t2.to("body", 1, {backgroundColor:'#a0808b'});
t2.staggerTo(["#nav-info li a","#name","#name-detail","hr.separator","footer a"], 0.5, 
  {color:"#f5f43a"},0);


t3.to("body", 1, {backgroundColor:'#F94444'});
t3.staggerTo(["#nav-info li a","#name","#name-detail","hr.separator","footer a"], 0.5, 
  {color:"#FEFEFE"},0);


//TODO ANIMATION


var hoverAbout = $('#about');
var hoverWork = $('#work');
var hoverContact = $('#contact');

hoverAbout.on("mouseenter", function(){
  tl.play().timeScale(1.5);
  tl.staggerTo(["#work","#contact","hr.separator"], 0.5, {color:"rgba(249, 68, 68, 0.6)"},0);
  TweenMax.to("#work",0.2,{scale:0.5});
});

hoverWork.on("mouseenter", function(){
  t2.play().timeScale(1.5);
  t2.staggerTo(["#about","#contact","hr.separator"], 0.5, {color:"rgba(245, 244, 58, 0.7)"},0);
});

hoverContact.on("mouseenter", function(){
  t3.play().timeScale(1.5);
  t3.staggerTo(["#about","#work","hr.separator"], 0.5, {color:"#EFEFEF"},0);
});

hoverAbout.on("mouseleave", function(){
  tl.reverse().timeScale(2.2);
  TweenMax.to(list, 0.8, {x:160});
});

hoverWork.on("mouseleave", function(){
  t2.reverse().timeScale(2.2);
  TweenMax.to(list, 0.8, {x:160});
});

hoverContact.on("mouseleave", function(){
  t3.reverse().timeScale(2.2);
  TweenMax.to(list, 0.8, {x:160});
});

$('#nav-info li a').click(function(e) {
  e.preventDefault();
  setTimeout(function(url) { window.location = url }, 1200, this.href);
});


// ON CLICK ANIMATION

$('#nav-info li a').on('click',
  function() {
    TweenMax.to(".home-info", 0.6, {opacity:0, skewY:"5deg", y:50, ease: Back.easeOut},0)

TweenMax.to("footer", 0.6, {opacity:0, skewY:"5deg", y:50, ease: Back.easeOut},0)

TweenMax.to(".nav",0.8, {opacity:0, skewY:"5deg",y:50, ease: Back.easeOut},0);

});
// $(document).ready(function(){
//   $(".home-info").hover(function(){
//     $(this).css("background-color", "#DDA448");
//     }, function(){
//     $(this).css("background-color", "#C5CBD3");
//   });
// });

// var $box = $('#box');

// $box.hover(
//    function() {
//       TweenLite.to($(this), 0.3, {scale:1.2});
//    },
//    function() {
//       TweenLite.to($(this), 0.15, {scale:1});  
//    }
// );
