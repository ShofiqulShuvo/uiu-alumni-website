// search bar start
document.getElementById("search-icon-btn")?.addEventListener("click", () => {
  document.getElementById("search-container")?.classList.toggle("active");
});

document.getElementById("close-search")?.addEventListener("click", () => {
  document.getElementById("search-container")?.classList.remove("active");
});
// search bar end

// all slider start

if (typeof Swiper !== 'undefined') {
  
  
  // hero slider
  var swiper = new Swiper(".heroSlider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".heroSlider-next",
      prevEl: ".heroSlider-prev",
    },
  });


}
// all slider  end




// masonry image grid
// Masonry and GLightbox initialization
document.addEventListener("DOMContentLoaded", () => {
  const masonryGrid = document.querySelector(".masonry-image-gallery");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (masonryGrid && galleryItems.length > 0) {
    const masonry = new Masonry(masonryGrid, {
      itemSelector: ".gallery-item",
      percentPosition: true,
    });

    const lightbox = GLightbox({
      selector: ".glightbox",
    });
  } 
});

// masonry image grid


