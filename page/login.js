
		function validate(){
			var username = document.sign.username;
			var password = document.sign.password;
			if (username.value=="" || password.value=="") {
				if(username.value==""){
					alert("username is required");
					username.style.border = "3px solid red";
					document.getElementById('username_div').style.color = "white";
					username.focus();
					return false;

				}
				else{

					alert("password is required");
					password.style.border = "1px solid red";
					document.getElementById('password_div').style.color = "red";
					password.focus();
					return false;
        		}
			}
			else
			{
				alert("sign - in successful");
			}
		}
	