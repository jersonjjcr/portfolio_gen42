document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkmode-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const body = document.body;
    
 
    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
        localStorage.setItem("dark-mode", darkModeToggle.checked);
    });
    
    
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }
    
    
    languageToggle.addEventListener("change", function () {
        document.querySelectorAll("[data-en]").forEach(el => {
            if (languageToggle.checked) {
                el.innerHTML = el.getAttribute("data-es");
            } else {
                el.innerHTML = el.getAttribute("data-en");
            }
        });
        localStorage.setItem("language", languageToggle.checked ? "es" : "en");
    });
    
    if (localStorage.getItem("language") === "es") {
        languageToggle.checked = true;
        document.querySelectorAll("[data-en]").forEach(el => {
            el.innerHTML = el.getAttribute("data-es");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_PUBLIC_KEY");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        let templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function (response) {
                alert("Your message has been sent successfully.");
                document.getElementById("contactForm").reset();
            }, function (error) {
                alert("An error occurred while sending the message. Please try again.");
                console.log("Error:", error);
            });
    });
});
