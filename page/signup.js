
    function validateForm() {
        var username = document.myForm.username;
        var father =document.myForm.father;
        var mother = document.myForm.mother;
        var mobile = document.myForm.mobile;
        var Age = document.myForm.Age;
        var date = document.myForm.date;
        var email = document.myForm.email;
        var pass = document.myForm.pass;
        var confirm = document.myForm.confirm;
        var line1 = document.myForm.line1;
        var line2 = document.myForm.line2;
        var city = document.myForm.city;
        var zip = document.myForm.zip;
        var state = document.myForm.state;
        var country = document.myForm.country;
        
        if (username.value == "" || username.value.length < 3) {
            if (username.value == "") {
                name_error.textContent = "Name is required";
                alert("Name is required");
            }
            else{
                name_error.textContent = "Name must be at least 3 characters";
                alert("Name must be at least 3 characters");
            }
            username.style.border = "1px solid red";
            document.getElementById('username_div').style.color = "red";
            username.focus();
            return false;
        }
        // validate fathername
        if (father.value=="" || father.value.length<4) {
            if (father.value == "") {
                father_error.textContent = "fathername is required";
                alert("fathername is required");
            }
            else{
                father_error.textContent = "Father name must be at least 3 characters";
                alert("Father name must be at least 3 characters");
            }
            father.style.border = "1px solid red";
            document.getElementById('father_div').style.color = "red";
            father.focus();
            return false;
        }
        // validate mothername
        if (mother.value=="" || mother.value.length<4) {
            if (mother.value == "") {
                mother_error.textContent = "mothername is required";
                alert("mothername is required");
            }
            else{
                mother_error.textContent = "mother name must be at least 3 characters";
                alert("Mother name must be at least 3 characters");
            }
            mother.style.border = "1px solid red";
            document.getElementById('mother_div').style.color = "red";
            mother.focus();
            return false;
        }
        // validate mobile number
        if ( mobile.value.length =="" || mobile.value.length <10 || mobile.value.length >10) {
            if(mobile.value.length ==""){
                alert("Enter contact number")
                mobile_error.textContent = "contact nuhmber is required";
            }
            else{
                alert("contact number of 10 digits")
                mobile_error.textContent = "enter 10 digit nuhmber";
            }
            
            mobile.style.border = "1px solid red";
            document.getElementById('mobile_div').style.color = "red";
            mobile.focus();
            return false;
            
        } 
        // validate Age
        if ( Age.value.length =="" || Age.value <0 || Age.value>100) {
            if(Age.value.length ==""){
                alert("Age required")
                Age_error.textContent = "contact nuhmber is required";
            }
            else{
                alert("Age is in between 0-100 ")
                Age_error.textContent = "Age is in between 0-100";
            }
            
            Age.style.border = "1px solid red";
            document.getElementById('Age_div').style.color = "red";
            Age.focus();
            return false;
            
        } 
        // validate date
        if ( date.value.length ==""){
                alert("date of birth required")
                date_error.textContent = "date of birth nuhmber is required";
                date.style.border = "1px solid red";
                document.getElementById('date_div').style.color = "red";
                date.focus();
                return false;
            
        } 
        // validate email
        if (email.value=="") {
            email_error.textContent = "email is required";
            alert("email is required");
            email.style.border = "1px solid red";
            document.getElementById('email_div').style.color = "red";
            email.focus();
            return false;
        }
         // validate password
         if (pass.value=="") {
            pass_error.textContent = "password is required";
            alert("password is required");
            pass.style.border = "1px solid red";
            document.getElementById('pass_div').style.color = "red";
            pass.focus();
            return false;
        }

        if (confirm.value=="") {
            confirm_error.textContent = "confirmpassword is required";
            alert("password is required");
            confirm.style.border = "1px solid red";
            document.getElementById('confirm_div').style.color = "red";
            confirm.focus();
            return false;
        }

        if(pass.value != confirm.value){
            pass_error.textContent = "Password mismatch"
            confirm_error.textContent = "Password mismatch"
            alert("Password and confirm password should be same")
            pass.style.border = "1px solid red";
            document.getElementById('pass_div').style.color = "red";
            pass.focus();
            confirm.style.border = "1px solid red";
            document.getElementById('confirm_div').style.color = "red";
            confirm.focus();
            return false;
            
        }

        if (line1.value=="") {
            line1_error.textContent = "Address line1 is required";
            alert("Address line1 is required");
            line1.style.border = "1px solid red";
            document.getElementById('line1_div').style.color = "red";
            line1.focus();
            return false;
        }
        if (line2.value=="") {
            line2_error.textContent = "Address line1 is required";
            alert("landmark is required");
            line2.style.border = "1px solid red";
            document.getElementById('line2_div').style.color = "red";
            line2.focus();
            return false;
        }
        if (city.value=="") {
            city_error.textContent = "Address line1 is required";
            alert("landmark is required");
            city.style.border = "1px solid red";
            document.getElementById('city_div').style.color = "red";
            city.focus();
            return false;
        }


        if (zip.value=="" || zip.value.length!=6) {
            if (zip.value=="") {
                alert("zip-code required");
                zip_error.textContent = "zip-code is required";
            }
            else{
                alert("zip-code is of 6 digits");
                zip_error.textContent = "zip-code is of 6 digits";
            }
            zip.style.border = "1px solid red";
            document.getElementById('zip_div').style.color = "red";
            zip.focus();
            return false;
        }

        if (state.value=="") {
            state_error.textContent = "state is required";
            alert("state is required");
            state.style.border = "1px solid red";
            document.getElementById('state_div').style.color = "red";
            state.focus();
            return false;
        }

        if (country.value=="") {
            country_error.textContent = " country is required";
            alert("country is required");
            country.style.border = "1px solid red";
            document.getElementById('country_div').style.color = "red";
            country.focus();
            return false;
        }


         
         else {
            alert("form submitted successfully");
            return true;
        }
    }