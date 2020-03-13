var topnewz;

fetch( "https://hacker-news.firebaseio.com/v0/topstories.json")
.then(response => response.json())
.then(data =>{
    topnewz = data;
});



var indexz = 0
var div = document.getElementById("topnews")

function add(){
    if (indexz>=topnewz.length){
        indexz=0
    }
    div.innerHTML = "";
    for (let i=0; i<20; i++){
        let id = topnewz[indexz];
        fetch( "https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
        .then(response => response.json())
        .then(data =>{
            let a = document.createElement("a");
            a.href = data.url;
            a.innerHTML = data.title;
            let contain = document.createElement("div");
            contain.classList.add("nz");
            contain.appendChild(a);
            div.appendChild(contain);

        })
        indexz++;
    }
    let butt = document.getElementById("show/hide");
    butt.innerHTML = "Hide"
}
function end(){
    let butt = document.getElementById("show/hide");
    if (div.style.display == "none"){
        div.style.display = "block";
        butt.innerHTML = "Hide";
    }
    else {
        div.style.display = "none";
        butt.innerHTML = "Show";
    }
}