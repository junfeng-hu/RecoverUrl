function mouseUpHander(e){
    var element = e.target;
    var tagName = element.tagName;
    console.log(tagName);
    if (tagName != "A" && tagName != "EM"){
        return;
    }
    var a = (tagName == "A") ? element : element.parentNode;
    var h3 = a.parentNode;
    if (h3.tagName != "H3" || h3.className != "r"){
        var cite = a.parentNode;
        if (cite.tagName != "CITE" || (cite.className != "_pd bc" && cite.className != "_Hd bc"))
            return;
    }
    console.log("current: " + a.href);
    a.href = a.getAttribute("data-href");
    console.log("after: " + a.href);
}

function init(){
    document.body.addEventListener("mouseup", mouseUpHander);
    console.log("starting listening A...");
}
init();
