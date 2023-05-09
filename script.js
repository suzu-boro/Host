document.getElementById("parent").innnerHTML=("Something Else");
document.getElementById("parent").style.cssText=("background-color:red; color:black; text-align:center");
document.getElementsByClassName("exercise")[0].innnerHTML=("I am class selector")

document.getElementsByClassName("parent1")[0].style.cssText=("background-color:aqua; color:brown");

document.getElementsByClassName("exercise")[3].innnerHTML=("I am index 3");

document.getElementsByTagName("h1").style.cssText=("background-color:red; color:white")

document.querySelector("h2").style.cssText=("text-align:center; text-transform:uppercase")
