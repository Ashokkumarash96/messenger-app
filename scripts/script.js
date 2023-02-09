const person1 = document.getElementById("person1");
const person2 = document.getElementById("person2");
const sendButton = document.getElementById("send-button");
let msg = document.querySelector("disp");
let ps1 = document.getElementById("ps1");
let ps2 = document.getElementById("ps2");
const time = new Date();

sendButton.addEventListener("click", function () {
  if (person1.value !== "") {
    //alert(`Person 1 says: ${person1.value}`);
    let p = document.createElement("p");
    const time = new Date();
    p.innerHTML = `${
      person1.value
    } <t>${time.getHours()} : ${time.getMinutes()}</t>`;
    ps1.appendChild(p);
    person1.value = "";
  } else if (person2.value !== "") {
    //alert(`Person 2 says: ${person2.value}`);
    let span = document.createElement("span");
    const time = new Date();
    span.innerHTML = `${
      person2.value
    } <t>${time.getHours()} : ${time.getMinutes()}</t>`;
    ps1.appendChild(span);
    person2.value = "";
  }
});
