function validation(inputtxtphone,inputtxtcard){
    //var telephone = /^\d{10}$/;
    //document.write("Output : " + inputtxt);
    var phonearr = Array.from(inputtxtphone);
    var cardarr = Array.from(inputtxtcard);
    if (phonearr.length!=10){
        alert("Please enter a 10 digit Phone number");
        return false;
    }
    else if(!(cardarr[0]==5 && (cardarr[1]==1 || cardarr[1]==5) && cardarr.length==19)){
        alert("Not a valid Master Card number, Master card numbers begin with 51 or 55 and contain 16 digits");
        return false;
    }
    else{
        confirm("You have booked a " + document.getElementById('service').value +" with " +document.getElementById('person').value + " on " + document.getElementById('birthday').value + " at " + document.getElementById('appt').value);
    }
};
function cardnumber(inputtxt){
    var arr = Array.from(inputtxt);
    if (arr[0]==5 && (arr[1]==1 || arr[1]==5) && arr.length==16){
        return true;
    }
    else{
        
    }
}

