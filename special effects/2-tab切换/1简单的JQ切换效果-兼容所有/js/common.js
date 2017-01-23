$(function () {
  //遍历一个jQuery对象，为每个匹配元素执行一个函数
  /*tab标签切换*/
  function tabs(tabTit, on, tabCon) {
    // init First
    $(tabTit).each(function () {
      $(this).children().eq(0).addClass(on);
    });
    $(tabCon).each(function () {
      $(this).children().eq(0).show();
    });

    // switchover click
    $(tabTit).children().click(function () {
      $(this).addClass(on).siblings().removeClass(on);

      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }

  tabs(".tab_title", "on", ".tab_con");

})






