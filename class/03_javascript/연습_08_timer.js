setTimeout(function (){
console.log("펑")    
},3000)
// 1
// VM114:2 펑
setInterval(function () {
console.log("1초")    
},1000)
// 2
// 15VM211:2 1초
setInterval(function(){
    console.log(time)
    time = time - 1
},1000)

let time = 10
undefined
setInterval(function(){
    if (time>=0) {
        console.log(time)
        time = time - 1
    }
},1000)
// 1
// VM392:3 10
// VM392:3 9
// VM392:3 8
// VM392:3 7
// VM392:3 6
// VM392:3 5
// VM392:3 4
// VM392:3 3
// VM392:3 2
// VM392:3 1
// VM392:3 0

// let time = 180

undefined
setInterval(function(){
    if (time >= 0) {
        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)