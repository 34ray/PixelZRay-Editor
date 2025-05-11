let IS_CLICKED = false
let CURRENT_COLOR = "rgb(0,0,0)"
let fill = document.querySelector(".fill")

let field = document.querySelector(".field")

for (let i = 0; i < 900; i++){
    let cell = document.createElement("div")
    cell.classList.add("cell")
    field.appendChild(cell)

}

//огтслеживание нажатия на мышь
document.addEventListener("mousedown", function(){
    IS_CLICKED = true
})
document.addEventListener("mouseup", function(){
    IS_CLICKED = false
})


let cells = document.querySelectorAll(".cell")



cells.forEach(cell => {
    cell.addEventListener("mouseover", function(){
        if (IS_CLICKED) {
            anime({
                targets: cell,
                duration: 10,
                background: CURRENT_COLOR
            })
        }
    })
    fill.addEventListener("click", function(){
        cell.style.background = CURRENT_COLOR
    })
})

cells.forEach(cell => {
    cell.addEventListener("click", function(){
        anime({
            targets: cell,
            duration: 10,
            background: CURRENT_COLOR
        })
    })
})



let last_cell = null
let color_cells = document.querySelectorAll(".color-cell")
color_cells.forEach(color_cell => {
    color_cell.addEventListener("click", function(){
        CURRENT_COLOR = getComputedStyle(color_cell).backgroundColor
        anime ({
            targets: last_cell,
            duration: 200,
            width: 40
        })
        anime({
            targets: color_cell,
            duration: 200,
            width: 60
        })
        last_cell = color_cell
    })
})

document.getElementById("download").addEventListener("click", function(){
    const node = document.getElementById('my-node')

    domtoimage.toJpeg(node, { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})

