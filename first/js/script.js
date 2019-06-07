// console.log("load");

var $a = document.querySelector("#btn-top");
var $scroll = document.scrollingElement||document.body || document.documentElement;


$a.addEventListener("click", onclickbtntop);
function onclickbtntop(e){
    e.preventDefault();
    console.log("click btn top");
    anime({
        targets : $scroll,
        scrollTop : 0,
        duration : 10000,
        ease : 'easeInOutQuad'
    });
}