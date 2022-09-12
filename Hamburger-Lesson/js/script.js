$(function() {
  $('.menu-trigger').on('click' , function(event) {
    // .nenu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
  });
});