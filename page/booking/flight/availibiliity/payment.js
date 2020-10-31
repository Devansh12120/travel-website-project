function validate(){
    var  fname= document.payment.fname;
    var  email= document.payment.email;
    var  adr= document.payment.adr;
    var  city= document.payment.city;
    var  state= document.payment.state;
    var  zip= document.payment.zip;
    var  cname= document.payment.cname;
    var  ccnum= document.payment.ccnum;
    var  expmonth= document.payment.expmonth;
    var  expyear= document.payment.expyear;
    var  cvv= document.payment.cvv;
    var patt = /[a-zA-Z]{3,12}/;
    var patt_mobile = /[0-9]{4}[-][0-9]{3}[-][0-9]{3}/;
    var patt_email = /[a-zA-Z0-9]{3,}[@][a-zA-Z]{2,}[.com]/;
    var patt_pass = /[a-zA-Z]{3}[!@#$%^&*]{1}[0-9]{3}/;
    var patt_zip = /[0-9]{6}/;
    var patt_ccnum = /[0-9]{4}[-][0-9][4][-][0-9][4]/;
    var patt_expyear = /[0-9]{4}/;
    var patt_cvv = /[0-9]{3}/;
    
    
    if ( fname.value == "" && email.value == "" && adr.value == "" && city.value == "" && state.value == "" && zip.value == "" && cname.value == "" && ccnum.value == "" &&  expmonth.value == "" && expyear.value == "" && cvv.value == "" ) {
            fname.style.border = "1px solid red";
            email.style.border = "1px solid red";
            adr.style.border = "1px solid red";
            city.style.border = "1px solid red";
            state.style.border = "1px solid red";
            zip.style.border = "1px solid red";
            cname.style.border = "1px solid red";
            ccnum.style.border = "1px solid red";
            expmonth.style.border = "1px solid red";
            expyear.style.border = "1px solid red";
            cvv.style.border = "1px solid red";
            alert("fill the required details")
            return false;
        }
        if(fname.value == "" || !patt.test(fname.value)){
            if(fname.value == ""){
                alert("username is required");
            }
            else{
                fname_error.textContent = "Name in [a-zA-Z] only";
                alert("Name in [a-zA-Z] only");
            }
            fname.style.border = "1px solid red";
            document.getElementById('fname_div').style.color = "red";
            fname.focus();
            return false;
        }
        if(email.value == "" || !patt_email.test(email.value)){
            if (email.value == "") {
                alert("email is required");
            }
            else{
                alert("email must hasve @\n it must have a domain \n domain must be followed b extension \n combination of letters and digits");
            }
            email.style.border = "1px solid red";
            document.getElementById('email_div').style.color = "red";
            email.focus();
            return false;
        }
        if(adr.value == ""){
            alert("address is required");
            adr.style.border = "1px solid red";
            document.getElementById('adr_div').style.color = "red";
            adr.focus();
            return false;
        }
        if(city.value == ""){
            alert("city is required");
            city.style.border = "1px solid red";
            document.getElementById('city_div').style.color = "red";
            city.focus();
            return false;
        }
        if(state.value == ""){
            state.style.border = "1px solid red";
            alert("state is requied");
            document.getElementById('state_div').style.color = "red";
            state.focus();
            return false;
        }
        if(zip.value == "" || !patt_zip.test(zip.value)){
            if (zip.value == "") {
                alert("zip code is required.")
            }
            else{
                zip_error.textContent = "wrong zip code format";
            }
            zip.style.border = "1px solid red";
            document.getElementById('zip_div').style.color = "red";
            zip.focus();
            return false;
        }
        if(ccnum.value=="" || !patt_ccnum.test(ccnum.value)){
            if (condition) {
                alert("credit card number is required.")
            } else {
                ccnum_error.textContent = "credit card number wrong format";
            }
            ccnum.style.border = "1px solid red";
            document.getElementById('ccnum_div').style.color = "red";
            ccnum.focus();
            return false;
        }
        if(expyear.value=="" || expyear.value>2035 || !patt_expyear.test(expyear.value)){
            if (expyear.value="") {
                alert("expiry year is required")
            }
            if(expyear.value>2035){
                alert("expiry cannot be greater than 2035")
            }
             else {
            expyear_error.textContent = "wrong expiry year format";
            }
            expyear.style.border = "1px solid red";
            document.getElementById('expyear_div').style.color = "red";
            expyear.focus();
            return false;
        }
        if(cvv.value=="" || !patt_cvv.test(cvv.value)){
            if (cvv.value) {
                alert("cvv is required.")
            } else {
                cvv_error.textContent = "wrong cvv format";
            }
            cvv.style.border = "1px solid red";
            document.getElementById('cvv_div').style.color = "red";
            cvv.focus();
            return false;
        }
        else{
            alert("ticket booked successfully");
            return true;
        
        }
    
  }