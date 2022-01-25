$(document).ready(function(){
//in-view-js
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
//in-view-js


 $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      });
      $(".vertical-center-3").slick({
        dots: false,
        horizontal: true,
        autoplay: true,
        autoplaySpeed: 25000,
        centerMode: true,
        infinite:false,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: false,
        infinite: true,
        centerMode: true,

      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

  // jQuery.event.special.touchstart = {
  //   setup: function( _, ns, handle ){
  //     if ( ns.includes("noPreventDefault") ) {
  //       this.addEventListener("touchstart", handle, { passive: false });
  //     } else {
  //       this.addEventListener("touchstart", handle, { passive: true });
  //     }
  //   }
  // };
  // jQuery.event.special.touchmove = {
  //   setup: function( _, ns, handle ){
  //     if ( ns.includes("noPreventDefault") ) {
  //       this.addEventListener("touchmove", handle, { passive: false });
  //     } else {
  //       this.addEventListener("touchmove", handle, { passive: true });
  //     }
  //   }
  // };   
 // button element

document.addEventListener("touchstart", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
}, Modernizr.passiveeventlisteners ? {passive: true} : false);
	
function someMethodIThinkMightBeSlow() {
    const startTime = performance.now();

    // Do the normal stuff for this function

    const duration = performance.now() - startTime;
    console.log(`someMethodIThinkMightBeSlow took ${duration}ms`);
}
// jQuery.event.special.touchstart = {
//   setup: function( _, ns, handle ) {
//       this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
//   }
// };


});