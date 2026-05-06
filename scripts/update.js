let intervalid = 0;
let colors = ["yellow", "orange", "red", "magenta", "violet", "blue", "green"];

function load() {
    intervalid = setInterval(update, 1000 / 5);
}

function update() {
    // console.log("lmao")
    var item = colors[Math.floor(Math.random()* colors.length)];
    var color = "var(--" + item + ")";
    document.getElementById("title").style.color = color;
    document.getElementById("shine").style.textShadow = color + " 0 0 20px"
}