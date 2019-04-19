// Call clear() when DEL or Backspace is pressed on keyboard
document.addEventListener('keydown', function (event) {
if (event.keyCode == 8) {
    // console.log('BACKSPACE was pressed');
    // Call event.preventDefault() to stop the character before the cursor
    // from being deleted. Remove this line if you don't want to do that.
    event.preventDefault();
    clear();
}
if (event.keyCode == 46) {
    // console.log('DELETE was pressed');
    event.preventDefault();
    clear();
}
// Other keyboard bindings
if (event.keyCode == 96) {
    event.preventDefault();
    put("0");
}
if (event.keyCode == 97) {
    event.preventDefault();
    put("1");
}
if (event.keyCode == 98) {
    event.preventDefault();
    put("2");
}
if (event.keyCode == 99) {
    event.preventDefault();
    put("3");
}
if (event.keyCode == 100) {
    event.preventDefault();
    put("4");
}
if (event.keyCode == 101) {
    event.preventDefault();
    put("5");
}
if (event.keyCode == 102) {
    event.preventDefault();
    put("6");
}
if (event.keyCode == 103) {
    event.preventDefault();
    put("7");
}
if (event.keyCode == 104) {
    event.preventDefault();
    put("8");
}
if (event.keyCode == 105) {
    event.preventDefault();
    put("9");
}
if (event.keyCode == 110) {
    event.preventDefault();
    put(".");
}
if (event.keyCode == 107) {
    event.preventDefault();
    put("+");
}
if (event.keyCode == 109) {
    event.preventDefault();
    put("-");
}
if (event.keyCode == 106) {
    event.preventDefault();
    put("*");
}
if (event.keyCode == 111) {
    event.preventDefault();
    put("/");
}
if (event.keyCode == 13) {
    event.preventDefault();
    calculate("=");
}
});

// Calculator logic
function put(n_value)
{
    if(n_value == '+' || n_value == '-' || n_value == 'x' || n_value == '/' || n_value == '.')
    {
        document.getElementById(n_value).style.backgroundColor = "rgb(60, 60, 60)";
        document.getElementById("dis").value += n_value;
        setTimeout(function(){document.getElementById(n_value).style.backgroundColor = "gray";}, 150);
        
    }
    else
    {
        document.getElementById(n_value).style.backgroundColor = "rgb(60, 60, 60)";
        document.getElementById("dis").value += n_value;
        setTimeout(function(){document.getElementById(n_value).style.backgroundColor = "rgb(51, 51, 51)";}, 150);
        
    }
}

function clear()
{
    document.getElementById("dis").value = "";
}

function calculate(eq_value)
{
    document.getElementById(eq_value).style.backgroundColor = "rgb(60, 60, 60)";            
    var exp = document.getElementById("dis").value;
    if(exp)
    {
        document.getElementById("dis").value = eval(exp);
    }
    setTimeout(function(){document.getElementById(eq_value).style.backgroundColor = "gray";}, 150);
}
