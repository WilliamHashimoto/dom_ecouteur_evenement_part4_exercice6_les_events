//1
let div_content = document.getElementById('content');
function exo6(e) {
    console.log(e.target);
    e.target.setAttribute('style', 'border: solid 1px red;');
}

div_content.addEventListener('click', exo6);

//2

div_content.addEventListener('click', (e) =>{
    console.log(e);
    e.target.setAttribute('style', 'border: solid 1px red;');
})