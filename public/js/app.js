import { Grid, newGrid } from "./functions.js";

// ///////////////////////////////////////////////
// //---------------Imports-----------------------
const menu = document.querySelectorAll(".menu");
const generateBtn = document.getElementById("start");
const img = document.getElementById("tutorial-Img");

/////////////////////////////////////
// ----------- Grid Objects ---------

const grid0 = new Grid(
  document.getElementById("gridContainer0"),
  document.getElementById("sliderContainer0")
);
const grid1 = new Grid(
  document.getElementById("gridContainer1"),
  document.getElementById("sliderContainer1")
);
const grid2 = new Grid(
  document.getElementById("gridContainer2"),
  document.getElementById("sliderContainer2")
);
const grid3 = new Grid(
  document.getElementById("gridContainer3"),
  document.getElementById("sliderContainer3")
);
const grid4 = new Grid(
  document.getElementById("gridContainer4"),
  document.getElementById("sliderContainer4")
);
let gridList = [grid0, grid1, grid2, grid3, grid4];

// Generate all unlocked grids
function generateAll() {
  gridList.forEach(grid => {
    grid.gridLocked
      ? null
      : grid.gridActive
      ? grid.generateGrid()
      : (newGrid(grid),
        setTimeout(() => {
          grid.generateGrid();
        }, 500));
  });
}

///////////////////////////////////////////////
// ---------- Object event listeners -----------
setTimeout(() => {
  document.addEventListener("keypress", event => {
    if (event.keyCode === 32) {
      img.style.opacity = 0;
      generateAll();
    }
  });
}, 300);

document.addEventListener("mousedown", () => {
  const that = event.target;

  // Fade out tutorial img
  img.style.opacity = 0;

  // Generate all on generate button click
  that === generateBtn ? generateAll() : null;

  if (that.classList.contains("menu")) {
    switch (that) {
      case menu[0]:
        grid0.gridLocked
          ? null
          : grid0.gridActive
          ? grid0.generateGrid()
          : newGrid(grid0);
        break;
      case menu[1]:
        grid1.gridLocked
          ? null
          : grid1.gridActive
          ? grid1.generateGrid()
          : newGrid(grid1);
        break;
      case menu[2]:
        grid2.gridLocked
          ? null
          : grid2.gridActive
          ? grid2.generateGrid()
          : newGrid(grid2);
        break;
      case menu[3]:
        grid3.gridLocked
          ? null
          : grid3.gridActive
          ? grid3.generateGrid()
          : newGrid(grid3);
        break;
      case menu[4]:
        grid4.gridLocked
          ? null
          : grid4.gridActive
          ? grid4.generateGrid()
          : newGrid(grid4);
        break;
    }
  }
});
