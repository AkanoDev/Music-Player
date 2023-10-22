function slide(title) {
  let changetitle = document.querySelector(".js-aside-title");
  changetitle.innerText = title;
}
function fillColor() {
  const fill = document.querySelector(".js-heart-icon");

  if (!fill.classList.contains("isFilled")) {
    fill.classList.add("isFilled");
  } else {
    fill.classList.remove("isFilled");
  }
}
