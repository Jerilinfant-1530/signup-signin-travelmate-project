// ===============================
// SHOW / HIDE PASSWORD
// ===============================

function togglePassword(id) {

    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}


// ===============================
// SIGNUP FORM
// ===============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get input values
        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const location =
            document.getElementById("location").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        // Error elements
        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const phoneError =
            document.getElementById("phoneError");

        const locationError =
            document.getElementById("locationError");

        const passwordError =
            document.getElementById("passwordError");

        const confirmPasswordError =
            document.getElementById("confirmPasswordError");


        // Clear old errors
        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        locationError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";


        let isValid = true;


        // Full Name Validation
        if (fullName === "") {

            nameError.textContent =
                "Full name is required";

            isValid = false;
        }


        // Email Validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Enter a valid email address";

            isValid = false;
        }


        // Phone Validation
        const phonePattern = /^\d{10}$/;

        if (!phonePattern.test(phone)) {

            phoneError.textContent =
                "Phone number must contain 10 digits";

            isValid = false;
        }


        // Location Validation
        const locationPattern =
            /^[A-Za-z\s]+$/;

        if (!locationPattern.test(location)) {

            locationError.textContent =
                "City must contain only alphabets";

            isValid = false;
        }


        // Password Validation
        const passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

        if (!passwordPattern.test(password)) {

            passwordError.textContent =
                "Password must have at least 8 characters with letters and numbers";

            isValid = false;
        }


        // Confirm Password
        if (password !== confirmPassword) {

            confirmPasswordError.textContent =
                "Passwords do not match";

            isValid = false;
        }


        // Successful Signup
        if (isValid) {

            const user = {
                fullName: fullName,
                email: email,
                phone: phone,
                location: location,
                password: password
            };


            // Save registered user
            localStorage.setItem(
                "registeredUser",
                JSON.stringify(user)
            );


            alert("Signup successful! Please Sign In.");


            // Redirect to SignIn page
            window.location.href = "SignIn.html";
        }

    });

}

// ===============================
// SIGN IN FORM
// ===============================

const signinForm = document.getElementById("signinForm");

if (signinForm) {

    signinForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const signinEmail =
            document.getElementById("signinEmail").value.trim();

        const signinPassword =
            document.getElementById("signinPassword").value;

        const signinEmailError =
            document.getElementById("signinEmailError");

        const signinPasswordError =
            document.getElementById("signinPasswordError");

        signinEmailError.textContent = "";
        signinPasswordError.textContent = "";

        let isValid = true;

        // Email Validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(signinEmail)) {

            signinEmailError.textContent =
                "Enter a valid email address";

            isValid = false;
        }

        // Password Required
        if (signinPassword === "") {

            signinPasswordError.textContent =
                "Password is required";

            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Get registered user
        const storedUser =
            localStorage.getItem("registeredUser");

        if (!storedUser) {

            signinEmailError.textContent =
                "No registered account found. Please Sign Up first.";

            return;
        }

        const registeredUser =
            JSON.parse(storedUser);

        // Check Email
        if (signinEmail !== registeredUser.email) {

            signinEmailError.textContent =
                "Email is not registered";

            return;
        }

        // Check Password
        if (signinPassword !== registeredUser.password) {

            signinPasswordError.textContent =
                "Incorrect password";

            return;
        }

        // Successful Login
        alert("Login successful!");

        window.location.href = "travelapp.html";

    });

}