const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
  response.style.display = "block";
  btn1.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.style.display = "block";
  btn2.style.background = "red";
});

// console.log(response);
