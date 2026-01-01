function homepagellmmodechange() {
    var hlmcs = document.getElementById("hlmcs").value;
    if (hlmcs == "hllm") {
        localStorage.setItem("hlmmode", "on");
        window.location.href = "/llm.html";

    } else {
        window.location.href = "/";
        localStorage.setItem("hlmmode", "off");
    }

}
window.addEventListener("load", function () {
history.replaceState({}, "", "/");
if(localStorage.getItem("hlmmode")=="off")
{
location.href="/";
}else{
document.getElementById("hlmcs").value="hllm";

}

});
document.getElementById("settings-button").addEventListener("click",function(){document.getElementById("popup1").style.display="block"});document.getElementById("popup1-close").addEventListener("click",function(){document.getElementById("popup1").style.display="none"});window.addEventListener("click",function(e){if(e.target==document.getElementById("popup1")){document.getElementById("popup1").style.display="none"}});



/*humbuger*/
var btnMenu=document.getElementsByClassName("hmbtn");var body=document.getElementById("menu-pc-l-mobile-c");for(var i=0;i<btnMenu.length;i++){btnMenu[i].addEventListener('click',function(){document.getElementById("menu-pc-l-mobile-c").classList.toggle('menu-open')})}