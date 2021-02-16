$(document).ready(function () {
  // При клике на кнопку "menu-button" появляется mobile menu
  // обращение на jQuery

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-navigation").toggleClass("navbar-navigation_visible");
    $(".menu-button").toggleClass("menu-button_active");
  });

  // При клике на кнопку "menu-button" появляется mobile menu
  // обращение на js
  // document.querySelector(".menu-button").onclick = function () {
  //   document
  //     .querySelector(".navbar-navigation")
  //     .classList.toggle("navbar-navigation_visible");
  //   document
  //     .querySelector(".menu-button")
  //     .classList.toggle("menu-button_active");
  // };

  // Tabs на jQuery

  var tabsItem = $(".tabs__item");
  var trendingCards = $(".trending-cards");

  tabsItem.on("click", function (even) {
    var activeContent = $(this).attr("data-target");
    trendingCards.removeClass("trending-cards_active");
    tabsItem.removeClass("tabs__item_active");
    $("#" + activeContent).addClass("trending-cards_active");
    $(this).addClass("tabs__item_active");
  });

  // Swiper slider

  var mySwiper = new Swiper(".testimonial-slider", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var mySwiper = new Swiper(".stories-slider", {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: ".stories__button_next",
      prevEl: ".stories__button_prev",
    },
  });
});
