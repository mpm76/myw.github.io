$(function (params) {

  // $('.menu__btn').on('click', function () {
  //   $('.menu__list').toggleClass('menu__list--active');
  // });

  $('.catalog-top__filter-btn').on('click', function () {
    $('.catalog-product__filter-burger').toggleClass('catalog-product__filter-burger--active');
  });

  $('.catalog-product__filter-btn').on('click', function () {
    $('.catalog-product__filter-burger').toggleClass('catalog-product__filter-burger--active');
  });


  $('.menu__btn').on('click', function () {
    $('.burger-menu').toggleClass('burger-menu--active');
  });

  $('.burger-menu__btn').on('click', function () {
    $('.burger-menu').toggleClass('burger-menu--active');
  });



  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active')
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-page__slider').slick({
    dots: false,
    prevArrow: '<button type = "button"class="slick-prev"><img src="images/icons/icon-arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type = "button"class="slick-next"><img src="images/icons/icon-arrow-right.svg" alt="arrow-right"></button>',
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "₴"
  });

  $('.select-style, .product-page__item-num').styler();
  

  $('.slider__inner').slick({
    dots: true,
    prevArrow: '<button type = "button"class="slick-prev"><img class="slick-prev__img" src="images/icons/prev-arrow.svg" alt="arrow-left">Previous</button>',
    nextArrow: '<button type = "button"class="slick-next"><img class="slick-next__img" src="images/icons/next-arrow.svg" alt="arrow-right"></button>',
  });

    $(".product-page__item-star").rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      readOnly: true,
      spacing: "6px"
    });

    $(".product-tabs__reviews-1--star").rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      readOnly: true,
      spacing: "6px"
    });

    $(".product-tabs__reviews-2--star").rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      readOnly: true,
      spacing: "6px"  
    });

    $(".product-tabs__review-star--active").rateYo({
      starWidth: "16px",
      normalFill: "#C1C1C1",
      ratedFill: "#FFB800",
      readOnly: true,
      spacing: "6px"
    });

  $('.product-interest__items-slider').slick({
    dots: false,
    prevArrow: '<button type = "button"class="slick-prev"><img src="images/icons/prev-arrow.svg" alt="arrow-left"></button>',
    nextArrow: '<button type = "button"class="slick-next"><img src="images/icons/next-arrow.svg" alt="arrow-right"></button>',
  });


});