// Tiny Slider
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
   // Arrows for Slider
   document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
   });
   document.querySelector('.next').addEventListener('click', function () {
      slider.goTo('next');
   });

   // Tabs
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

   // Items
   $('.product-item__less').each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.product-item__content').eq(i).toggleClass('product-item__content_active');
         $('.product-item__list').eq(i).toggleClass('product-item__list_active');
      })
   });

   // Modal
   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn();
   });
   $('.button_product').on('click', function () {
      $('.overlay, #order').fadeIn();
   });

   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
   });
   $('.button_product').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__subtitle').text($('.product__item-title').eq(i).text());
      });
   });
   // Validator
      //email and name
   function valideForms(form) {
      $(form).validate({
      rules: {
         name: {
            required: true,
            minlength: 2,
         },
         phone: {
            required: true
         },
         email: {
            required: true,
            email: true
         }
      },
   });
   };
   valideForms('#order form');
   valideForms('#consultation-form');
   valideForms('#consultation form');
   
      //phone
   $('input[name=number]').mask("+1 (999) 999-99-99");

});