const person1 = document.getElementById("person1");
const person2 = document.getElementById("person2");
const sendButton = document.getElementById("send-button");
let msg = document.querySelector("disp");
let ps1 = document.getElementById("ps1");
let ps2 = document.getElementById("ps2");

sendButton.addEventListener("click", function () {
  if (person1.value !== "") {
    //alert(`Person 1 says: ${person1.value}`);
    let p = document.createElement("p");
    p.innerHTML = `${person1.value}`;
    ps1.appendChild(p);
    person1.value = "";
  } else if (person2.value !== "") {
    //alert(`Person 2 says: ${person2.value}`);
    let span = document.createElement("span");
    span.innerHTML = `${person2.value}`;
    ps1.appendChild(span);
    person2.value = "";
  }
});
