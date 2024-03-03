let arr = ["1111111111","2222222222","3333333333","4444444444","5555555555"]
let link = "https://wa.me/91"

let button = document.getElementById("changing")

function change(){
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    link = `https://wa.me/91${randomElement}`
    window.location.href = link
}
