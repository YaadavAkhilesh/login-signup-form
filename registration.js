$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            firstName:{
                required: true
            },
            lastName:{
                required: true
            },
            userType:{
                required: true
            },
            age:{
                required: true
            },
            field:{
                required: true
            },
            technology:{
                required: true
            },
            // degree:{
                
            // },
            // experience:{

            // },
            countryFreelancer:{
                required: true
            },
            services:{
                required: true
            },
            countryClient:{
                required: true
            },
            contactEmail: {
                required: true,
                email: true
            },
            contactPhone:{
                required: true
            },
            username:{
                required: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16
            },
            confirmPassword:{
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            firstName:{
                required: "Please enter your first name"
            },
            lastName:{
                required: "Please enter your last name"
            },
            userType:{
                required: "Please select your user type"
            },
            age:{
                required: "Please enter your age"
            },
            field:{
                required: "Please enter your field and language specification"
            },
            technology:{
                required: "Please enter the technology"
            },
            countryFreelancer:{
                required: "Please enter your country name"
            },
            services:{
                required: "Select your service which you want"
            },
            countryClient:{
                required: "Please enter your country name"
            },
            contactEmail: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            contactPhone:{
                required: "Please enter your phone no"
            },
            username:{
                required: "Please create a username"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                maxlength: "Password must be no more longer than 16 characters.",
            },
            confirmPassword:{
                required: "Please confirm your password",
                equalTo: "Please enter the same password as above"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "userType") {
                error.insertAfter(".form-group[name='user']");
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler:function(form){
            form.submit();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() 
{
    const freelancerFields = document.getElementById('freelancerFields');
    const clientFields = document.getElementById('clientFields');

    document.getElementsByName('userType').forEach((elem) => {
        elem.addEventListener('change', function(event) {
            if (event.target.value === 'Freelancer') 
            {
                freelancerFields.classList.remove('hidden');
                clientFields.classList.add('hidden');
            } else if (event.target.value === 'Client') 
            {
                clientFields.classList.remove('hidden');
                freelancerFields.classList.add('hidden');
            }
        });
    });
});


// changing "card's" margin-top when selecting freelancer and client radio button 
document.querySelectorAll('input[name="userType"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const content = document.getElementById('card');
        if (this.id === 'freelancer') {
            content.setAttribute('style', 'margin-top: 766px');
        } else if (this.id === 'client') {
            content.setAttribute('style', 'margin-top: 422px');
        }
    });
});



document.getElementById('toggle-password-icon').addEventListener('click', function() {
    let passwordInput = document.getElementById('password');
    let eyeOpenIcon = document.getElementById('eye-open-icon');
    let eyeCloseIcon = document.getElementById('eye-close-icon');
    
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
        eyeOpenIcon.style.display = 'none';
        eyeCloseIcon.style.display = 'block';
    } else {
        passwordInput.setAttribute('type', 'password');
        eyeOpenIcon.style.display = 'block';
        eyeCloseIcon.style.display = 'none';
    }
});

document.getElementById('toggle-password-icon-reenter').addEventListener('click', function() {
    let confirmpassword = document.getElementById('confirmPassword');
    let eyeOpenIcon = document.getElementById('eye-open-icon-reenter');
    let eyeCloseIcon = document.getElementById('eye-close-icon-reenter');
    
    if (confirmpassword.getAttribute('type') === 'password') {
        confirmpassword.setAttribute('type', 'text');
        eyeOpenIcon.style.display = 'none';
        eyeCloseIcon.style.display = 'block';
    } else {
        confirmpassword.setAttribute('type', 'password');
        eyeOpenIcon.style.display = 'block';
        eyeCloseIcon.style.display = 'none';
    }
});

