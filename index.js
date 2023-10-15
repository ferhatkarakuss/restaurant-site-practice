const toTop = document.querySelector(".to-top");
const kaloriButon = document.querySelectorAll(".kalori");
const hazirlikButon = document.querySelectorAll(".hazirlik");
const alerjenButon = document.querySelectorAll(".alerjen");

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,

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

kaloriButon.forEach((icon) => {
  icon.addEventListener("click", function () {
    iziToast.show({
      title: "Kalori:",
      message: " 600 Kcal",
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
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
