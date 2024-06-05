
   const slider = tns({
      container: '.slider__carousel',
      items: 1,
      slideBy: 'page',
      controls: false,
      navPosition: 'bottom',
      autoplay: true,
      autoplayButtonOutput: false,
      responsive: {
         990: {
            edgePadding: 20,
            gutter: 20,
            items: 1
         },
         991: {
            nav: false,
         }
      }
   });
   document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
   });
   document.querySelector('.next').addEventListener('click', function () {
      slider.goTo('next');
   });
$(document).ready(function () {
   $('ul.product__tabs').on('click', 'li:not(.product__tab_active)', function () {
      $(this)
         .addClass('product__tab_active').siblings().removeClass('product__tab_active')
         .closest('div.container').find('div.product__items').removeClass('product__items_active').eq($(this).index()).addClass('product__items_active');
   });
   $('.product-item__more').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.product-item__content').eq(i).toggleClass('product-item__content_active');
         $('.product-item__list').eq(i).toggleClass('product-item__list_active');
      })
   });

   $('.product-item__less').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.product-item__content').eq(i).toggleClass('product-item__content_active');
         $('.product-item__list').eq(i).toggleClass('product-item__list_active');
      })
   });
});