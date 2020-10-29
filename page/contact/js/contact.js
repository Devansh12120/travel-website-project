	function contact() {
		var name =document.form.name;
		var mail=document.form.mail;
		var Message=document.form.Message;
		var cnumber=document.form.cnumber;
		var patt = /[a-zA-Z]{3,12}/;
		var patt_mobile = /[0-9]{4}[-][0-9]{3}[-][0-9]{3}/;
		var patt_email = /[a-zA-Z0-9]{3,}[@][a-z]{2,}[.com]/;
		
		if (name.value=="" && mail.value=="" && Message.value==""&& cnumber.value=="" ) {
			alert("fill the required details");
			name.style.border = "3px solid cyan";
			mail.style.border = "3px solid cyan";
			Message.style.border = "3px solid cyan";
			cnumber.style.border = "3px solid cyan"
			return false;

		}
		if(!patt.test(name)){
			alert("Incorrect name format\n Sample format Mark Green");
			name.style.border = "3px solid cyan";
			return false;
		}
		if (!patt_mobile.test(cnumber)) {
			alert("Incorrect mobile format\n Sample mobile format XXXX-XXX-XXX");
			cnumber.style.border = "3px solid cyan";
			return false;
		}
		if(!patt_email.test(mail)){
			alert("Incorrect mail format\n Sample format abcHYC123@xyzv.com");
			mail.style.border = "3px solid cyan";
			return false;
		}

		 else {
			alert("form submitted successfully.");
			
			return true;
		}
	}