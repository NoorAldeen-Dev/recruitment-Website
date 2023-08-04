import "../sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core";
import "@fortawesome/fontawesome-free/css/all.css";

const listItems = document.querySelectorAll('.nav-link');//To sellect the navbar links.

function setActiveClass() {
  if (document.querySelector('.nav-link.active') != null) {//If the nav-link has the active class remove it.
    document.querySelector('.nav-link.active').classList.remove('active');  
  } 
  this.classList.add('active');//After removing active class from all nav-links. Add class to the selected nav-link
}

listItems.forEach(item => {
  item.addEventListener('click', setActiveClass);//Do the last function when the nav-link is clicked.
});
let myFile="";


document.getElementById("upload-cv").addEventListener('change', (e) => {

  myFile = document.getElementById("upload-cv").value;//To select the file path when we upload it.
  let upld = myFile.split('.').pop();//To select the file type (pdf or jpg etc...);
  if(upld=='pdf'){
    alert("File uploaded is pdf")
  }else{
    alert("Only PDF are allowed")
  }
 
});
document.getElementById("year").innerHTML=new Date().getFullYear();//To add the current year