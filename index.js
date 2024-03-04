let arr = ["9179793585","9589973235","9685079623","8349047404","8602145689"]
let link = "https://wa.me/91"
let button = document.getElementById("changing")

function change(){
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    link = `https://wa.me/91${randomElement}`
    window.location.href = link
}
