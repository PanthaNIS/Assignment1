window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        document.getElementById("navigation").style.backgroundColor="#fff";

    }else{
            document.getElementById("navigation").style.backgroundColor="transparent";
        }
    }

