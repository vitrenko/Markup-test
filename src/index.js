const start = datepicker('.start', { id: 1 });
const end = datepicker('.end', { id: 1 });

const tileViewBtn = document.querySelector(".tile-view");
const listViewBtn = document.querySelector(".list-view");

const items = document.querySelector(".content-wrap");

tileViewBtn.addEventListener("click", () => {
  tileViewBtn.classList.add("active");
  listViewBtn.classList.remove("active");
  items.classList.add("card-view");
});

listViewBtn.addEventListener("click", () => {
  listViewBtn.classList.add("active");
  tileViewBtn.classList.remove("active");
  items.classList.remove("card-view");
});