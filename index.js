function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}); 


function moveDodgerRight(){
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 400-40) {
  dodger.style.left = `${left + 5}px`
  };
};

document.addEventListener("keyup", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
}); 