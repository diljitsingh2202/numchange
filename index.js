let arr = ["9179863253","9589027253","9527342271","8602145689","9981662243","8602719283","9589108423","9685079623"]
let link = "https://wa.me/91"

let button = document.getElementById("changing")

function change(){
    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    link = `https://wa.me/91${randomElement}`
    button.href = link
}
