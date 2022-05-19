// Calling validationForm to validate the user input with the condition and return alert .

function validateForm() {
    var fname = document.getElementById("fname").value;
    var email=document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var sum = document.getElementById("sum").value;

   
   // making condition for name validation
    if (fname == "" || fname == "name") {
      alert("Please enter you full name.");
      return false;
    }
    // making condition for email validation
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
   // making condition for message validation
   else if (message==""){
     alert("Message can't be empty");
     return false;
   }
   
   text = "Dear" + " "+ fname +", Thank you for your inquiry. One of our team member will be in touch with you shortly." 
    document.getElementById("test").innerHTML=text;
    document.getElementById("test").style.color="green";
   

     
    
     alert("Thank you! Your form has been submitted. We will get back to you as soon as possible.");
   
  }

  //calling onclick function to to display the DOM 

  // function create(){
  //   text = "Dear" + fname +", Thank you for your inquiry. One of our team member will be in touch with you shortly." 
  //   document.getElementById("test").innerHTML=text;
  //   document.getElementById("test").style.color="green";
  //   }
  

  
  
  // Calling onblur function in name input of the form to transform the text to uppercase.
  function myName() {
    var name = document.getElementById("fname");
    name.value = name.value.toUpperCase();
  }

    // Calling onrest fuction to reset the form and fill it again.

    function myReset() {
      document.getElementById("myform").reset();
    }

    