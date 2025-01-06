let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);

    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
})


