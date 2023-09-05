const audio = new Audio("mixkit-crowd-laugh-424.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

console.log("hallo");
