// Calling validationForm to validate the user input with the condition and return alert .

function validateForm() {
    var name = document.getElementById("fname").value;
    var email=document.getElementById("email").value;
   
    if (name == "" || name == "name") {
      alert("Please enter you full name.");
      return false;
    }
   else if ( email == "" || email == "email"){
    //    creating the condition to check the input email address and validate with the below regex formate.
         var emailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
         if (email.match(emailAddress)){
             return true;
         }
         else {
             alert("Valid email address must be filled.");
             return  false;
         }
   }
     
    
     alert("Thank you! Your form has been submitted. We will get back to you as soon as possible.");
   
  }

  //calling onclick function to to display the DOM 

  function create(){
    if (email == true ){
    document.getElementById("test").innerHTML="Hi there, your form has been successfully submitted";
    document.getElementById("test").style.color="green";
    return true
    }
    else{
    document.getElementById("test").innerHTML="Hi there, your form has not been submitted";
    document.getElementById("test").style.color="red";
    }
  
}
  
  
  // Calling onblur function in name input of the form to transform the text to uppercase.
  function myName() {
    var name = document.getElementById("fname");
    name.value = name.value.toUpperCase();
  }

    // Calling onrest fuction to reset the form and fill it again.

    function myReset() {
      document.getElementById("myform").reset();
    }