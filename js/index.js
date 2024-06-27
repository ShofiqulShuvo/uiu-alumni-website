// search bar start
document.getElementById("search-icon-btn")?.addEventListener("click", () => {
  document.getElementById("search-container")?.classList.toggle("active");
});

document.getElementById("close-search")?.addEventListener("click", () => {
  document.getElementById("search-container")?.classList.remove("active");
});
// search bar end

// all slider start
if (Swiper) {
  var swiper = new Swiper(".heroSlider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".heroSlider-next",
      prevEl: ".heroSlider-prev",
    },
  });
}
// all slider start end
