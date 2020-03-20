$(function() {
  const effect_pos = 100; // 画面下からどの位置でフェードさせるか(px)
  const effect_move = 120; // どのぐらい要素を動かすか(px)
  const effect_time = 1200;

  $(".scroll-fade").css({
    opacity: 0,
    transform: "translateY(" + effect_move + "px)",
    transition: effect_time + "ms"
  });

  $(window).on("scroll load", function() {
    const scroll_top = $(this).scrollTop();
    const scroll_btm = scroll_top + $(this).height();

    $(".scroll-fade").each(function() {
      const this_pos = $(this).offset().top;
      if (scroll_btm - effect_pos > this_pos) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)"
        });
      }
    });
  });
});
