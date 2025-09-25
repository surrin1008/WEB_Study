const auth = () =>{
    const token = String(Math.floor( Math.random() * 1000000)).padStart(6,"0")
    
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
    // document.getElementById("target").style.color = RandomColor();
}

// function RandomColor() {
//     const red = Math.floor(Math.random() * 256)
//     const green = Math.floor(Math.random() * 256)
//     const blue = Math.floor(Math.random() * 256)
//     return `rgb(${red}, ${green}, ${blue})`
// }