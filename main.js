//1
let div = document.getElementById('content');

function hello(e) {
    e.target.setAttribute("style", "border: 1px solid red");
}

// div.addEventListener("click",hello);

//2
div.addEventListener('click', (e)=>{
    e.target.setAttribute("style", "border: 1px solid red");
});