// Javascript function to validate wheather whether they adhere to the companies COVID policies
var covid;
if (covid = confirm("Hi there, Are you known about the covid policies of the company??")){
    
}
else{
    alert("Hi there, sorry you cannot visit any of the properties in person unless you adhere to the company covid policies.")
}


window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        document.getElementById("navigation").style.backgroundColor="lightblue";

    }else{
            document.getElementById("navigation").style.backgroundColor="transparent";
        }
    }

