let btn = document.getElementById("cls");
let div = document.getElementById("div");
let show = document.getElementById("show");
let ss = document.querySelector("#ss");
console.log(ss);
console.log(cls);
console.log(show);
console.log(div);
btn.addEventListener("click", () => {
  div.classList.toggle("hidden");
  div.classList.remove("block");
});
show.addEventListener("click", () => {
  div.classList.toggle("block");
  div.classList.remove("hidden");
});

let sms = document.getElementById("message");
console.log(sms);
sms.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  alert(
    `Hello ${name} . Welcome to my site. Unfortunately, it is currently not possible to send me a message from within the site. Please connect with me on my social networks ❤️.`
  );
});
