const map = document.querySelector(".map");
const parent = document.querySelector(".parent");

const linearBtn = document.querySelector(".page-lineaire");

linearBtn.addEventListener("click", function () {
  map.classList.add("map-change");
  parent.style.gap = "60px";
});

const freeBtn = document.querySelector(".page-libre");

freeBtn.addEventListener("click", function () {
  map.classList.remove("map-change");
});
