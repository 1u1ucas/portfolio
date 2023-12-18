let openShadow = false;

document.addEventListener("DOMContentLoaded", function () {
  const map = document.querySelector(".map");
  let isDragging = false;
  let startX, startY, mapLeft, mapTop;

  map.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    mapLeft = map.offsetLeft;
    mapTop = map.offsetTop;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging && !openShadow) {
      const offsetX = (e.clientX - startX) * 2;
      const offsetY = (e.clientY - startY) * 2;
      let newLeft = mapLeft + offsetX;
      let newTop = mapTop + offsetY;

      const container = document.querySelector(".container");
      const maxLeft = 0;
      const maxTop = 0;
      const minLeft = container.offsetWidth - map.offsetWidth;
      const minTop = container.offsetHeight - map.offsetHeight;

      newLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);
      newTop = Math.min(Math.max(newTop, minTop), maxTop);

      map.style.left = `${newLeft}px`;
      map.style.top = `${newTop}px`;
    }
  });
  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
});

const { gsap, CircleType } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
const cursorTextContainerEl = document.querySelector(".cursor--text");
const cursorTextEl = cursorTextContainerEl.querySelector(".text");

const hoverItems = document.querySelectorAll(".cursor-hover-item");
const hoverEffectDuration = 0.3;
let isHovered = false;
let initialCursorHeight;
console.log(hoverItems);

const cursorRotationDuration = 8;

let circleType = new CircleType(cursorTextEl);
circleType.radius(50);

setTimeout(() => {
  initialCursorHeight = circleType.container.style.getPropertyValue("height");
  console.log(initialCursorHeight);
}, 50);

hoverItems.forEach((item) => {
  item.addEventListener("pointerenter", handlePointerEnter);
  console.log(handlePointerEnter);
  item.addEventListener("pointerleave", handlePointerLeave);
  console.log(handlePointerLeave);
});

let mouse = {
  x: 100,
  y: 100,
};

document.body.addEventListener("pointermove", updateCursorPosition);

function updateCursorPosition(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
}

function updateCursor() {
  gsap.set([cursorInner, cursorTextContainerEl], {
    x: mouse.x,
    y: mouse.y,
  });

  gsap.to(cursorOuter, {
    duration: 0.15,
    x: mouse.x,
    y: mouse.y,
  });

  if (!isHovered) {
    gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
      opacity: 0,
    });
    gsap.set(cursorTextContainerEl, {
      rotate: 0,
    });
  }

  requestAnimationFrame(updateCursor);
}

updateCursor();

function handlePointerEnter(e) {
  isHovered = true;

  const target = e.currentTarget;
  updateCursorText(target);

  gsap.set([cursorTextContainerEl, cursorTextEl], {
    height: initialCursorHeight,
    width: initialCursorHeight,
  });

  gsap.fromTo(
    cursorTextContainerEl,
    {
      rotate: 0,
    },
    {
      duration: cursorRotationDuration,
      rotate: 360,
      ease: "none",
      repeat: -1,
    }
  );

  gsap.to(cursorInner, hoverEffectDuration, {
    scale: 2,
  });

  gsap.fromTo(
    cursorTextContainerEl,
    hoverEffectDuration,
    {
      scale: 1.2,
      opacity: 0,
    },
    {
      delay: hoverEffectDuration * 0.75,
      scale: 1,
      opacity: 1,
    }
  );
  gsap.to(cursorOuter, hoverEffectDuration, {
    scale: 1.2,
    opacity: 0,
  });
}

function handlePointerLeave() {
  isHovered = false;
  gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
    scale: 1,
    opacity: 1,
  });
}

function updateCursorText(textEl) {
  const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
  const cursorText = returnMultipleString(
    textEl.getAttribute("data-cursor-text"),
    cursorTextRepeatTimes
  );

  circleType.destroy();

  cursorTextEl.innerHTML = cursorText;
  circleType = new CircleType(cursorTextEl);
}

function returnMultipleString(string, count) {
  let s = "";
  for (let i = 0; i < count; i++) {
    s += ` ${string} `;
  }
  return s;
}

const cards = document.querySelectorAll(".cursor-hover-item");
const shadow = document.querySelector(".shadow-background");
const boltPage = document.querySelector(".bolt-page");
const JAPage = document.querySelector(".JA-page");
const infoPage = document.querySelector(".info-page");
const marshallPage = document.querySelector(".Marshall-page");
const xMark = document.querySelector(".xmark");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const value = card.dataset.value;
    console.log(card, value);
    updateCSS(card, value);
  });
});

const updateCSS = (type, value) => {
  switch (value) {
    case "bolt":
      openShadow = true;
      console.log(openShadow);
      boltPage.style.transform = `translateY(0%)`;
      shadow.style.transform = `translateY(0%)`;
      shadow.style.backgroundColor = "rgba(0, 0, 0, 50% )";
      break;
    case "JA":
      openShadow = true;
      console.log(openShadow);
      JAPage.style.transform = `translateY(0%)`;
      shadow.style.transform = `translateY(0%)`;
      shadow.style.backgroundColor = "rgba(0, 0, 0, 50% )";
      break;
    case "Marshall":
      openShadow = true;
      console.log(openShadow);
      marshallPage.style.transform = `translateY(0%)`;
      shadow.style.transform = `translateY(0%)`;
      shadow.style.backgroundColor = "rgba(0, 0, 0, 50% )";
      break;
    case "info":
      openShadow = true;
      console.log(openShadow);
      infoPage.style.transform = `translateY(0%)`;
      shadow.style.transform = `translateY(0%)`;
      shadow.style.backgroundColor = "rgba(0, 0, 0, 50% )";
      break;
    case "shadow":
      openShadow = false;
      console.log(openShadow);
      boltPage.style.transform = `translateY(100%)`;
      marshallPage.style.transform = `translateY(100%)`;
      JAPage.style.transform = `translateY(100%)`;
      infoPage.style.transform = `translateY(100%)`;
      shadow.style.backgroundColor = "rgba(0, 0, 0, 0% )";
      setTimeout(() => {
        shadow.style.transform = `translateY(100%)`;
      }, "1200");

      break;
    case "xmark":
      openShadow = false;
      console.log(openShadow);
      boltPage.style.transform = `translateY(100%)`;
      marshallPage.style.transform = `translateY(100%)`;
      JAPage.style.transform = `translateY(100%)`;
      infoPage.style.transform = `translateY(100%)`;
      shadow.style.backgroundColor = "rgba(0, 0, 0, 0% )";
      setTimeout(() => {
        shadow.style.transform = `translateY(100%)`;
      }, "1200");

      break;
  }
};
