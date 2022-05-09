function validationForm(){
    let name = document.myForms.fullname.value;
    let phone = document.myForms.phone.value;
    let address = document.myForms.address.value;
    let price = document.myForms.price.value;
    if (name == null || name == ""){
        alert("Please filled out your full name");
        return false;
    }
    else if (phone != Number){
        alert("Input phone number should be number");
    }
}