console.log("Start Here 😉");

// 1. Using DOM manipulation to target the box container element. 
// 2. And add eventlistner to each radio button aswell.
// 3. Create a function that handels theme color


const box = document.getElementById("box")
const dark = document.getElementById("dark")
const light = document.getElementById("light")
const crazy = document.getElementById("crazy")


dark.onclick = ()  => {
  box.style.backgroundColor = "darkgreen";
} 
light.onclick = () => {
  box.style.backgroundColor = "yellow";
}
crazy.onclick = () => {
  box.style.backgroundColor = "magenta";
}






