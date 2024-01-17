const map = document.querySelector(".map");
console.log("map", map);

const linearBtn = document.querySelector(".page-lineaire");
console.log("page-linear", linearBtn);

linearBtn.addEventListener("click", function () {
  map.classList.add("map-change");
});

const freeBtn = document.querySelector(".page-libre");

freeBtn.addEventListener("click", function () {
  map.classList.remove("map-change");
});
