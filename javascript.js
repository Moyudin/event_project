function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var darkModeButton = document.getElementById('darkmode');
    if (element.classList.contains("dark-mode")) {
        darkModeButton.innerText = 'Dark Mode';
    } else {
        darkModeButton.innerText = 'Light Mode';
    }

    //For navbar
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle("dark-mode");
    if (navbar.classList.contains('dark-mode')){
        navbar.classList.remove('navbar-light');
        navbar.classList.remove('bg-light');
    } else {
        navbar.classList.add('navbar-light');
        navbar.classList.add('bg-light');
    }

    // for what we do
    var col = document.getElementById('col-l')
    col.classList.toggle("colorblue2");
    col.classList.toggle("dark-mode");

    var textw = document.getElementById('text-white1')
    textw.classList.toggle("textdark");
    textw.classList.toggle("text-white");

    var textw = document.getElementById('text-white1i');
    textw.classList.toggle("textdark");
    textw.classList.toggle("text-white");

    var textw = document.getElementById('text-white2');
    textw.classList.toggle("textdark");
    textw.classList.toggle("text-white");

    var textw = document.getElementById('text-white2i');
    textw.classList.toggle("textdark");
    textw.classList.toggle("text-white");

    var textw = document.getElementById('text-white3')
    textw.classList.toggle("textdark");
    textw.classList.toggle("text-white");

    var textw = document.getElementById('text-white3i')
    textw.classList.toggle("textdark");
    textw.classList.toggle("text-white");

    // card
    var cardi = document.getElementById('card-i');
    cardi.classList.toggle("dark-mode");

    var cardii = document.getElementById('card-ii');
    cardii.classList.toggle("dark-mode");

    var cardiii = document.getElementById('card-iii');
    cardiii.classList.toggle("dark-mode");

    var cardiv = document.getElementById('card-iv');
    cardiv.classList.toggle("dark-mode");

    var cardv = document.getElementById('card-v');
    cardv.classList.toggle("dark-mode");

    var cardvi = document.getElementById('card-vi');
    cardvi.classList.toggle("dark-mode");
}

function validate(){
	var user=document.getElementById('user').value;
    var email=document.getElementById('email').value;
    var mobilenum=document.getElementById('mobilenumber').value;
    var otpnum = document.getElementById('otp').value;
    var mess = document.getElementById('message').value;

    // For Username
    if(user==null || user==""){
		document.getElementById('uname').innerHTML ="Please fill the username feild";
		return false;
	}
    if((user.length<=2) || (user.length>=30)){

		document.getElementById('uname').innerHTML ="Username lenght must be between 3 and 30 ";
		return false;
	}
    if(!isNaN(user)){
		document.getElementById('uname').innerHTML ="only character is allowed ";
		return false;
	}
    // For Email
    if(email==null || email==""){
		document.getElementById('emailid').innerHTML ="Please fill the email feild";
		return false;
	}
    if(email.indexOf('@') <= 0){
        document.getElementById('emailid').innerHTML ="@ invalid position";
        return false;
    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
        document.getElementById('emailid').innerHTML =" . invalid position";
        return false;
    }
    // For Mobile No
    if(mobilenum==null || mobilenum==""){
		document.getElementById('mobileno').innerHTML ="Please fill the mobile number feild";
		return false;
	}
	if(mobilenum.length!=10){
		document.getElementById('mobileno').innerHTML ="mobile number should be in 10 digits not more or less than 10.";
		return false;
	}
    // For OTP
    if(otpnum==null || otpnum==""){
		document.getElementById('otp-n').innerHTML ="Please Enter the OTP";
		return false;
	}
    if(otpnum.length!=4){
		document.getElementById('otp-n').innerHTML ="Please enter proper 4 digit OTP";
		return false;
	}
    //For Message
    if(mess==null || mess==""){
		document.getElementById('message-f').innerHTML ="Please leave some message";
		return false;
	}
    return true;
}