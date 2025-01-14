// // OLD CODE from pre-work
// const dodger = document.getElementById('dodger')

// dodger.style.backgroundColor = "#FF69B4"

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 5}px`;
//     }
//   };

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   }); 

// function moveDodgerRight (){
//     const leftNumbers = dodger.style.left.replace("px"," ");
//     const left = parseInt(leftNumbers, '10');
//     if (left < 400-40){
//         dodger.style.left = `${left+5}px`;
//     }
// };

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       moveDodgerRight();
//     }
//   }); 


// New code (same as old) written during Phase I
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