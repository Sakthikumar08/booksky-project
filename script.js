var popupoverlay=document.querySelector(".popup-overlay");
var addpopup=document.querySelector(".add-popup-container");
var addpopupbox=document.querySelector(".add-popup-button");

addpopupbox.addEventListener("click",function(){
    addpopup.style.display="block";
    popupoverlay.style.display="block";
})

var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    addpopup.style.display="none";
    popupoverlay.style.display="none";
})

var container=document.querySelector(".container");
var addbook=document.querySelector("#add-popup");
var booktitleinput=document.querySelector("#add-bookname");
var bookauthorinput=document.querySelector("#add-bookauthor");
var bookdescriptioninput=document.querySelector("#add-description");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var anotherpopup=document.createElement("div");
    anotherpopup.setAttribute("class","popup-container");
    anotherpopup.innerHTML=`<h1>${booktitleinput.value}</h1>`+`<h5>${bookauthorinput.value}</h5>`+`<p>${bookdescriptioninput.value}</p>`+"<button onclick='deletepopup(event)'>Delete</button>";
    
    container.append(anotherpopup);
    addpopup.style.display="none";
    popupoverlay.style.display="none";
})

function deletepopup(event){
    event.target.parentElement.remove();
}