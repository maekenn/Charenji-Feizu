$(function() {
  $('#back a').on('click' ,function(event){
    //#back内のaタグがクリックされた時の処理
    $('body, html').animate({
      //イベント発生時に行われる処理
      scrollTop:0
    }, 800);
  });
});