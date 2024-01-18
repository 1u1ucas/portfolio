const map = document.querySelector(".map");
const parent = document.querySelector(".parent");
const pages = document.querySelectorAll(".grid-item");
const JACardsText = document.querySelectorAll(".JA .card-text");

const linearBtn = document.querySelector(".page-lineaire");

linearBtn.addEventListener("click", function () {
  map.classList.add("map-change");
  parent.style.gap = "60px";
  pages.forEach((page) => (page.style.width = "80%"));
  JACardsText.forEach((JACardText) => (JACardText.style.bottom = "-20px"));
});

const freeBtn = document.querySelector(".page-libre");

freeBtn.addEventListener("click", function () {
  map.classList.remove("map-change");
  parent.style.gap = "none";
  pages.forEach((page) => (page.style.width = "auto"));
  JACardsText.forEach((JACardText) => (JACardText.style.bottom = "-80px"));
});
