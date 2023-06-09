var draggedItem = null;

var items = document.getElementsByClassName("items");

// Adding event listeners to draggable items
for (let i=0; i < items.length; i++) {
  items[i].addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.classList.add("dragging")
  });
  items[i].addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
    alert("Item has dropped")
  });
}


var box2 = document.getElementById("box2");

// Adding event listeners to second box
box2.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box2.addEventListener("drop", (e) => {
  e.target.append(draggedItem);
});

// Reset boxes
function resetBox() {
    location.reload();
  }