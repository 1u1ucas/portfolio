const map = document.querySelector(".map");
const parent = document.querySelector(".parent");
const pages = document.querySelectorAll(".grid-item");
const JACardsText = document.querySelectorAll(".JA .card-text");
const InfosUser = document.querySelector(".infos-user");

const linearBtn = document.querySelector(".page-lineaire");

linearBtn.addEventListener("click", function () {
  map.classList.add("map-change");
  parent.style.gap = "60px";
  pages.forEach((page) => (page.style.width = "80%"));
  JACardsText.forEach((JACardText) => (JACardText.style.bottom = "-20px"));
  InfosUser.style.opacity = "0";
  InfosUser.style.transition = "opacity 0s";
});

const freeBtn = document.querySelector(".page-libre");

freeBtn.addEventListener("click", function () {
  map.classList.remove("map-change");
  parent.style.gap = "none";
  pages.forEach((page) => (page.style.width = "auto"));
  JACardsText.forEach((JACardText) => (JACardText.style.bottom = "-80px"));
  InfosUser.style.opacity = "1";
  InfosUser.style.transition = "opacity 0s";
  setTimeout(() => {
    InfosUser.style.opacity = "0";
    InfosUser.style.transition = "opacity 6s";
  }, 1000);
});

setTimeout(function () {
  InfosUser.classList.add("invisible");
}, 1000);
