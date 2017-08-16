function sendAJAX() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                document.getElementById("main").innerHTML = JSON.parse(this.responseText).content;
        
        }
    };



    xhttp.open("GET", type , true);
    xhttp.send();
}
var type;
var links = document.getElementsByTagName("a");
for(x=0; x<links.length; x++) {
    links[x].addEventListener("click", findlink);
}

function findlink(e){
    e.preventDefault();
    type = this.getAttribute("data-linkName");
    sendAJAX();
}