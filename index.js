$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  lazyLoad: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const priceIcons = document.querySelectorAll(".fiyat");
const hazirlikButon = document.querySelectorAll(".hazirlik");
const alerjenButon = document.querySelectorAll(".alerjen");

priceIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    iziToast.show({
      title: "Fiyat:",
      message: " 100 TL",
      titleColor: "white",
      messageColor: "white",
      titleSize: "2rem",
      messageSize: "2rem",
      backgroundColor: "#192a56",
    });
  });
});

hazirlikButon.forEach((icon) => {
  icon.addEventListener("click", function () {
    iziToast.show({
      title: "Hazırlanma Süresi:",
      message: "15 Dakika",
      titleColor: "white",
      messageColor: "white",
      titleSize: "2rem",
      messageSize: "2rem",
      backgroundColor: "#192a56",
    });
  });
});

alerjenButon.forEach((icon) => {
  icon.addEventListener("click", function () {
    iziToast.show({
      title: "Alerjen Uyarısı:",
      message: "Gluten içerir.",
      titleColor: "white",
      messageColor: "white",
      titleSize: "2rem",
      messageSize: "2rem",
      backgroundColor: "#192a56",
    });
  });
});
