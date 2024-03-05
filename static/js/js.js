

$(".tablist").each(function(index, el) {
    var index = $(this).index();
    $(this).click(function(){
      $(this).find('.list').addClass('cur');
      $(this).siblings().find('.list').removeClass('cur');
      $(this).find('.list>img').show();
      $(this).siblings().find('.list>img').hide();
    });
});
