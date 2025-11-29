const input = document.getElementById("textInput");
const output = document.getElementById("output");

// live update text
input.addEventListener("input", () => {
    output.textContent = input.value;
});
let fontsize=40;

function red(){
    output.style.color="red";
}
function green(){
    output.style.color="green";
}
function blue(){
    output.style.color="blue";
}
function upper(){
    output.textContent=output.textContent.toUpperCase()
}
function lower(){
    output.textContent=output.textContent.toLowerCase()
}
function bigger(){
    fontsize+=5
    output.style.fontSize=fontsize+"px";
}
function smaller(){
    fontsize-=5
    output.style.fontSize=fontsize+"px";
}
function reset(){
    output.style.color="black";
    fontsize=40;
    output.style.fontStyle=fontsize+"px";
    output.textContent="";
    input.value="";
    
}
function caps() {
    let text = output.textContent;

    let words = text.split(" ").map(word => {
        if (word.length === 0) return "";   // skip empty words (multiple spaces)
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    output.textContent = words.join(" ");
}
