function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.display ="block"
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementByClass("auth").style.display = "block"
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.display ="none"
  document.getElementById("main").style.marginLeft = "0";
  document.getElementByClass("auth").style.display = "none"
}

const change = src => {
	document.getElementById('pic').src = src
	document.getElementById('show').style.display = "flex"
}

function closeImg() {
	document.getElementById('show').style.display = 'none'
}

let mybutton = document.getElementById("scroll_btn")
 
window.onscroll = function() {scroll_f()}

function scroll_f() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
		mybutton.style.display = "block"
	}
	else{
		mybutton.style.display = "none"
	}
	
}

function topScroll(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

let test = ""
try{
	test = localStorage.getItem("aslan")
} catch(e){
	console.log(e)
}

if(test == "1" ){
	console.log("Успешно")
	document.getElementById('log_in').style.display = "none"
} else{
	document.getElementById("main").style.display = "none"
	document.getElementById('log_in').style.display = "flex"
}

function save(){
	localStorage.setItem("aslan", "1")
}