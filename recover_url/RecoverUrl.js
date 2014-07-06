function recoverUrlHander(e){
    var element = e.target;
    var tagName = element.tagName;

    var a = (tagName === "A") ? element : element.parentNode;

    if (tagName !== "A")
        return;
    if (!a.getAttribute("data-href"))
        return;
    console.log("current: " + a.href);
    a.href = a.getAttribute("data-href");
    console.log("after: " + a.href);
}

function init(){
    document.body.addEventListener("mouseup", recoverUrlHander);
    document.body.addEventListener("contextmenu", recoverUrlHander);
    console.log("starting listening A...");
}
init();
