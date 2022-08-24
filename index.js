// Your code here
 
const dodger = document.getElementById("dodger");

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "documentArrowLeft") {
    moveDodgerLeft();
  }
  });
  
    function moveDodgerRight() {
        const RightNumbers = dodger.style.left.replace("px", "");
        const Right = parseInt(RightNumbers, 10);
      
        if (Right > 0) {
          dodger.style.left = `${Right + 1}px`;
        }
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "documentArrowRight") {
        moveDodgerRight();
      }
    })



