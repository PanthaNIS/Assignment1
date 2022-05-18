// Calling validationForm to validate the user input with the condition and return alert .

function validateForm() {
    var name = document.getElementById("fname").value;
    var phone=document.getElementById("phone").value;
    var address=document.getElementById("address").value;
    var price=document.getElementById("price").value;
   
    if (name == "") {
      alert("Please enter you full name.");
      return false;
    }
   else if ( phone == "" || phone == "phone"){
    //    creating the condition to check the input phone number must be number and ten digit long.
         var phoneNumber = /^\d{10}$/;
         if (phone.match(phoneNumber)){
             return true;
         }
         else {
             alert("phone number must be number and 10 digits long.");
             return  false;
         }
   }
     else if (address ==""){
      alert("Address must be filled");
      return false;
    }

    else if (price =="" || price<0){
        alert("Price must be filled and must be positive.")
        return false;
    }
    
     alert("Thank you! Your form has been submitted.");
   
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