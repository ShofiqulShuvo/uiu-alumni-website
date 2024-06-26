// search bar start
document.getElementById("search-icon-btn")?.addEventListener("click", () => {
  document.getElementById("search-container")?.classList.toggle("active")  
})

document.getElementById("close-search")?.addEventListener("click", () => {
  document.getElementById("search-container")?.classList.remove("active")  
})
// search bar end