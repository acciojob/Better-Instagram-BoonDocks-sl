// script.js
document.addEventListener("DOMContentLoaded", () => {
  const draggables = document.querySelectorAll(".image");

  // Add a draggable attribute to each image
  draggables.forEach((draggable) => {
    draggable.draggable = true;
  });

  let currentDraggable;

  // Function to handle the dragstart event
  function handleDragStart(e) {
    currentDraggable = e.target;
  }

  // Function to handle the drop event
  function handleDrop(e) {
    if (e.target.classList.contains("image")) {
      e.preventDefault();

      // Swap the background images of the two divs
      const temp = currentDraggable.style.backgroundImage;
      currentDraggable.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  }

  // Function to handle the dragover event
  function handleDragOver(e) {
    e.preventDefault();
  }

  // Add event listeners to the drag and drop events
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", handleDragStart);
    draggable.addEventListener("drop", handleDrop);
    draggable.addEventListener("dragover", handleDragOver);
  });
});
