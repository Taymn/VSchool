document.getElementById("button").addEventListener('click', function(){
    console.log("Click Me!")
});

var text = document.getElementById("text");
text.addEventListener('mouseover', function handleMouseOver() {
    text.style.backgroundColor = 'Blue';
});
text.addEventListener('mouseout', function handleMouseOut() {
    text.style.backgroundColor = 'White';
});
text.addEventListener('onmousedown', function handleOnMouseDown() {
    text.style.backgroundColor = 'Red';
});
text.addEventListener('onmouseup', function handleOnMouseUp() {
    text.style.backgroundColor = 'Yellow';
});
text.addEventListener('ondblclick', function handleondblclick() {
    text.style.backgroundColor = 'Green';
});
text.addEventListener('onmousewheel', function handleOnMouseWheel() {
    text.style.backgroundColor = 'Orange';
});

text.addEventListener('press B', function handleOnKeyPress() {
text.style.backgroundColor = 'Blue';
});
