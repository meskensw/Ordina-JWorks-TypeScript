replaceSpan();

function replaceSpan() : void{
    let element = document.getElementById("welcome-text");
    console.log(element);
    element.innerHTML = "test";
}