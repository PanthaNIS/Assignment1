function validateForm(){
    var name = document.getElementById(fullname).value;
    var email = document.getElementById(email).value;
    var message = document.getElementById(message).value;

    if (name==""){
        alert("Name must be entered.");
        return false;
    }

     if(email==""){
         alert("Please enter your email address");
     }
     else{
         var regex = /^\S+@\S+\.S+$/;
         if (regex.test(email) == false){
             alert("Please enter valid email address.")
         }

     }
     alert("Thank you your form has been submitted. we will get back to you asap.");
}
