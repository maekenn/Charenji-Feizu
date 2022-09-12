$('tab-contents .tab[id != "tab"]').hide();

$('#tab-menu a').on('click', function(event) {
  //イベント発生時に行われる処理
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});