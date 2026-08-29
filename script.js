```javascript
/* =========================================
   NEXORA HEALTH
   MAIN JAVASCRIPT FILE
   ========================================= */


/* ---------- PAGE LOAD ---------- */

document.addEventListener("DOMContentLoaded", function () {

    setMinimumDate();

    setupAppointmentForm();

    setupLoginForm();

    setupContactForm();

    setupNavigation();

});


/* ---------- APPOINTMENT DATE ---------- */

function setMinimumDate() {

    const dateInput = document.getElementById("appointmentDate");

    if (dateInput) {

        const today = new Date();

        const year = today.getFullYear();

        let month = today.getMonth() + 1;

        let day = today.getDate();

        if (month < 10) {
            month = "0" + month;
        }

        if (day < 10) {
            day = "0" + day;
        }

        const currentDate = year + "-" + month + "-" + day;

        dateInput.setAttribute("min", currentDate);

    }

}


/* ---------- APPOINTMENT FORM ---------- */

function setupAppointmentForm() {

    const appointmentForm =
        document.getElementById("appointmentForm");

    if (!appointmentForm) {
        return;
    }


    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("fullName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const department =
            document.getElementById("department").value;

        const doctor =
            document.getElementById("doctor").value;

        const date =
            document.getElementById("appointmentDate").value;


        const messageBox =
            document.getElementById("appointmentMessage");


        if (name === "") {

            showMessage(
                messageBox,
                "Please enter your full name.",
                "error"
            );

            return;
        }


        if (phone === "") {

            showMessage(
                messageBox,
                "Please enter your phone number.",
                "error"
            );

            return;
        }


        if (!isValidPhone(phone)) {

            showMessage(
                messageBox,
                "Please enter a valid phone number.",
                "error"
            );

            return;
        }


        if (email === "" || !isValidEmail(email)) {

            showMessage(
                messageBox,
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        if (department === "") {

            showMessage(
                messageBox,
                "Please select a department.",
                "error"
            );

            return;
        }


        if (doctor === "") {

            showMessage(
                messageBox,
                "Please select a doctor.",
                "error"
            );

            return;
        }


        if (date === "") {

            showMessage(
                messageBox,
                "Please select an appointment date.",
                "error"
            );

            return;
        }


        if (isPastDate(date)) {

            showMessage(
                messageBox,
                "Please select today or a future date.",
                "error"
            );

            return;
        }


        showMessage(
            messageBox,
            "Appointment request submitted successfully.",
            "success"
        );


        appointmentForm.reset();

        setMinimumDate();

    });

}


/* ---------- LOGIN FORM ---------- */

function setupLoginForm() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) {
        return;
    }


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("patientEmail").value.trim();

        const password =
            document.getElementById("patientPassword").value.trim();

        const messageBox =
            document.getElementById("loginMessage");


        if (email === "") {

            showMessage(
                messageBox,
                "Please enter your email address.",
                "error"
            );

            return;
        }


        if (!isValidEmail(email)) {

            showMessage(
                messageBox,
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        if (password === "") {

            showMessage(
                messageBox,
                "Please enter your password.",
                "error"
            );

            return;
        }


        if (password.length < 6) {

            showMessage(
                messageBox,
                "Password must contain at least 6 characters.",
                "error"
            );

            return;
        }


        showMessage(
            messageBox,
            "Login successful. Welcome to Nexora Health.",
            "success"
        );

    });

}


/* ---------- CONTACT FORM ---------- */

function setupContactForm() {

    const contactForm =
        document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("contactSubject").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();

        const messageBox =
            document.getElementById("contactMessageBox");


        if (name === "") {

            showMessage(
                messageBox,
                "Please enter your name.",
                "error"
            );

            return;
        }


        if (email === "" || !isValidEmail(email)) {

            showMessage(
                messageBox,
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        if (subject === "") {

            showMessage(
                messageBox,
                "Please enter a subject.",
                "error"
            );

            return;
        }


        if (message === "") {

            showMessage(
                messageBox,
                "Please write your message.",
                "error"
            );

            return;
        }


        if (message.length < 10) {

            showMessage(
                messageBox,
                "Please enter a little more detail in your message.",
                "error"
            );

            return;
        }


        showMessage(
            messageBox,
            "Your message has been sent successfully.",
            "success"
        );


        contactForm.reset();

    });

}


/* ---------- EMAIL VALIDATION ---------- */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* ---------- PHONE VALIDATION ---------- */

function isValidPhone(phone) {

    const phonePattern =
        /^[0-9+\-\s()]{7,20}$/;

    return phonePattern.test(phone);

}


/* ---------- DATE VALIDATION ---------- */

function isPastDate(dateValue) {

    const selectedDate =
        new Date(dateValue + "T00:00:00");

    const today =
        new Date();

    today.setHours(0, 0, 0, 0);

    return selectedDate < today;

}


/* ---------- MESSAGE DISPLAY ---------- */

function showMessage(element, message, type) {

    if (!element) {
        return;
    }


    element.textContent = message;


    if (type === "success") {

        element.style.color = "#4d8b68";

    } else {

        element.style.color = "#c35d6f";

    }


    element.style.opacity = "1";


    setTimeout(function () {

        element.style.opacity = "0";

    }, 5000);

}


/* ---------- NAVIGATION ---------- */

function setupNavigation() {

    const links =
        document.querySelectorAll(".navbar a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            links.forEach(function (item) {

                item.classList.remove("clicked");

            });

            this.classList.add("clicked");

        });

    });

}


/* ---------- SMOOTH BUTTON FEEDBACK ---------- */

const buttons =
    document.querySelectorAll(".primary-btn, .secondary-btn, .nav-btn");


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.98)";

        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});
```
