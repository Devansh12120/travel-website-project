function train() {
    var Boardingfrom = document.trainbooking.Boardingfrom;
    var Boardingto = document.trainbooking.Boardingto;
    var dateb = document.trainbooking.dateb; 
    var datej = document.trainbooking.datej;
    var patt = /[a-zA-Z]{3,12}/;
    if (Boardingfrom.value=="" && Boardingto.value=="" && dateb.value=="" && datej.value=="") {
        alert("Fill the required fields.");
        Boardingfrom.style.border = "3px solid red";
        Boardingto.style.border = "3px solid red";
        dateb.style.border = "3px solid red";
        datej.style.border = "3px solid red";
        return false;
    } 
    if (Boardingfrom.value=="" || !patt.test(Boardingfrom.value)) {
        if (Boardingfrom.value=="") {
            alert("Source Junction is required");
            Boardingfrom.style.border = "3ps solid red";
            return false;
        } else {
            alert("Invalid source format\n Sample {Delhi}");
            Boardingfrom.style.border = "3px solid red";
            return false;
        }
    }
    if (Boardingto.value=="" || !patt.test(Boardingto.value)) {
        if (Boardingto.value=="") {
            alert("Source Junction is required");
            Boardingto.style.border = "3px solid red";
            return false;
        } else {
            alert("Invalid destination format\n Sample {Delhi}");
            Boardingto.style.border = "3px solid red";
            return false;
        }
    }
    if(datej.value==""){
        alert("date of returning journey is required.");
        datej.style.border = "3px solid red";
        return false;
    }
    if(dateb.value==""){
        alert("date of journey is required.");
        dateb.style.border = "3px solid red";
        return false;
    }
    
    if (dateb.value==datej.value) {
        alert("Invalid date exception\n Date should be different.");
        dateb.style.border = "3px solid red";
        datej.style.border = "3px solid red";
        return false;
    }
    if (Boardingto.value==Boardingfrom.value) {
        alert("Boarding and arrriving station cannot be same.");
        Boardingto.style.border = "3px solid red";
        Boardingfrom.style.border = "3px solid red";
        return false;
    }
    else {
        alert("Details saved Successfully \n continue to availability");
        return true;
    }
}
