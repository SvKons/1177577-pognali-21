(function () {
  const mainNavElement = document.querySelector(".main-navigation");
  const mobileLogoElement = mainNavElement.querySelector("#logo-mobile");
  const tabletLogoElement = mainNavElement.querySelector("#logo-tablet");
  const desktopLogoElement = mainNavElement.querySelector("#logo-desktop");

  desktopLogoElement.srcset = "img/logo-desktop-white@1x.png 1x";

  window.onscroll = () => {
      if (window.scrollY >= mainNavElement.offsetHeight) {
          mainNavElement.classList.add("main-navigation--fixed");
          mobileLogoElement.src = "img/logo-mobile-blue@1x.png";
          tabletLogoElement.srcset = "img/logo-tablet-blue@1x.png 1x";
          desktopLogoElement.srcset = "img/logo-desktop-blue@1x.png 1x";

      }
      else {
          mainNavElement.classList.remove("main-navigation--fixed");
          mobileLogoElement.src = "img/logo-mobile-white@1x.png";
          tabletLogoElement.srcset = "img/logo-tablet-white@1x.png 1x";
          desktopLogoElement.srcset = "img/logo-desktop-white@1x.png 1x";
      }
  };
})();
