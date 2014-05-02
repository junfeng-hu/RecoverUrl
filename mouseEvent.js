function init(e){
    var a = document.getElementById("aid");
    a.addEventListener("mousedown", downHander);
    a.addEventListener("mouseup", upHander);
    a.addEventListener("click", clickHander);
}
function downHander(e){
    var a = e.target;
    console.log("current: " + a.href);
    a.href = "http://www.baidu.com"
    console.log("after: " + a.href);
}
function upHander(e){
    var a = e.target;
    console.log("current: " + a.href);
    a.href = "http://junfeng.ca"
    console.log("after: " + a.href);
}
function clickHander(e){
    var a = e.target;
    console.log("current: " + a.href);
}

document.addEventListener("DOMContentLoaded", init);
