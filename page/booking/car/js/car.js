	function booking() {
		var name = document.carbooking.name;
		var email = document.carbooking.email;
		var cnumber= document.carbooking.cnumber ;
		var Pickup= document.carbooking.Pickup ;
		var destination= document.carbooking.destination ;
		var date= document.carbooking.date ;
		var Hour= document.carbooking.Hour ;
		var Min= document.carbooking.Min ;
		var dropdate = document.carbooking.dropdate;
		var patt = /[a-zA-Z]{3,12}[ ][a-zA-Z]{3,12}/;
        var patt_mobile = /[+][0-9]{2}[-][0-9]{4}[-][0-9]{3}[-][0-9]{3}/;
        var patt_email = /[a-zA-Z0-9]{3,20}[@][a-zA-Z]{2,6}[.][a-zA-Z]{2,5}/;
		if (name.value==""  && email.value=="" &&cnumber.value=="" && Pickup.value=="" && destination.value==""   && date.value=="" && dropdate.value=="") {
			name.style.border = "5px solid yellow";
			cnumber.style.border = "5px solid yellow";
			email.style.border = "5px solid yellow";
			Pickup.style.border="5px solid yellow";
			destination.style.border="5px solid yellow";
			date.style.border="5px solid yellow";
			dropdate.style.border="5px solid yellow";
			alert("Fields are required");
			return false;
		}
		if (name.value=="" || !patt.test(name.value)){
			if (name.value=="") {
				alert("Username is required");
				name.style.border = "5px solid red";
				return false;
			} else {
				name.style.border = "5px solid red";
				alert("Wrong Username format\n Sample {John Doe}");
				return false;
			}
		}

		if (email.value=="" || !patt_email.test(email.value)){
			if (email.value=="") {
				alert("email is required");
				email.style.border = "5px solid red";
				return false;
			} else {
				email.style.border = "5px solid red";
				alert("Wrong Email format\n Sample {abcABC!@#@gmail.com}");
				return false;
			}
		}

		if (cnumber.value=="" || !patt_mobile.test(cnumber.value)){
			if (cnumber.value=="") {
				alert("Contact number is required");
				cnumber.style.border = "5px solid red";
				return false;
			} else {
				cnumber.style.border = "5px solid red";
				alert("Wrong Contact number format\n Sample {+XX-XXXX-XXX-XXX}");
				return false;
			}
		}

		if (Pickup.value==""){
				alert(" is required");
				Pickup.style.border = "5px solid red";
				return false;
		}

		if (destination.value==""){
				alert(" is required");
				name.style.border = "5px solid red";
				return false;
		}

		if (date.value=="" || dropdate.value==""){
			if (date.value=="") {
				alert("date is required");
				date.style.border = "5px solid red";
				return false;
			} else {
				alert("date is required");
				dropdate.style.border = "5px solid red";
				return false;
			}
		}

		if (dropdate.value < date.value){
				alert(" Drop date cannot be less than travelling date ");
				dropdate.style.border = "5px solid red";
				date.style.border = "5px solid red";
				return false;
		}
		else {
			alert("continue to check availibilty");
			return true;
		}
	}