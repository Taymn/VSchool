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
text.addEventListener('mousedown', function handleOnMouseDown() {
    text.style.backgroundColor = 'Red';
});
text.addEventListener('mouseup', function handleOnMouseUp() {
    text.style.backgroundColor = 'Yellow';
});
text.addEventListener('dblclick', function handleOnDblClick() {
    text.style.backgroundColor = 'Green';
});
text.addEventListener('wheel', function handleOnMouseWheel() {
    text.style.backgroundColor = 'Orange';
});


text.addEventListener('keydown', function handleOnKeyPress(e) { 
    if (e.key === "b"){
    text.style.backgroundColor = 'Blue';
} else if (e.key === "r"){
    text.style.backgroundColor = 'Red';
} else if (e.key === "y"){
    text.style.backgroundColor = 'Yellow';
} else if (e.key === "g"){
    text.style.backgroundColor = 'Green';
} else if (e.key === "o"){
    text.style.backgroundColor = 'Orange';
}});