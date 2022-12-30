// startup counter:
var container = document.querySelector(".count_container");
var viewNum = localStorage.getItem("page_view");

if(viewNum) {
     viewNum = Number(viewNum) + 1;
     localStorage.setItem("page_view", viewNum);
} else {
     viewNum = 1;
     localStorage.setItem("page_view", 1);
}
container.innerHTML = viewNum;

function resetCounter() {
     viewNum = 1;
     localStorage.setItem("page_view", 1);
     container.innerHTML = viewNum;
     console.log("reset.")
}
