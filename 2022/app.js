const c1=document.querySelector("#c1");
const c2=document.querySelector("#c2");
const count = document.querySelector("#count")
setTimeout(() => {
    count.innerHTML="4"
}, 1000);
setTimeout(() => {
    count.innerHTML="3"
}, 2000);
setTimeout(() => {
    count.innerHTML="2"
}, 3000);
setTimeout(() => {
    count.innerHTML="1"
}, 4000);
setTimeout(() => {
    c2.style.display="none";
    c1.style.display="block";
}, 5000);
