const box = document.querySelector('.box');
console.log(box);

const initialMousePos = { x: 0, y: 0 };
const offset = { x: 0, y: 0 };

const move = e => {
    offset.x = e.clientX - initialMousePos.x;
    offset.y = e.clientY - initialMousePos.y;

    // 최초 좌표에서 offset 만큼 이동한 좌표에 출력 하도록 한다.
    box.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
};

box.addEventListener('mousedown', e => {
    initialMousePos.x = e.clientX - offset.x;
    initialMousePos.y = e.clientY - offset.y;
        
    document.addEventListener('mousemove', move);
});

box.addEventListener('dblclick', () => {
    box.style.transform = 'translate(0, 0)';
    offset.x = 0;
    offset.y = 0;
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
});

let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.backgroundColor = "red";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.backgroundColor = "orange";
  event.target.style.fontWeight = "bold";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 500);
}, false);