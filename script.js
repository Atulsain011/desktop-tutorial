// ---- Hotel Booking Form Validation ----
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let hotel = document.getElementById("hotel").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;

    if (hotel && checkin && checkout && guests) {
        document.getElementById("booking-status").innerHTML =
            <span style="color: green;">Booking confirmed for ${hotel} from ${checkin} to ${checkout} for ${guests} guests!</span>;
    } else {
        document.getElementById("booking-status").innerHTML =
            <span style="color: red;">Please fill all fields correctly.</span>;
    }
});

// ---- Contact Form Validation ----
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-status").innerHTML =
            <span style="color: green;">Thank you, ${name}! Your message has been sent.</span>;
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-status").innerHTML =
            <span style="color: red;">Please fill all fields.</span>;
    }
});

// ---- Login Form Validation ----
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        alert(Welcome, ${username}! You have successfully logged in.);
        window.location.href = "index.html"; // Redirect to home page after login
    } else {
        alert("Please enter both username and password.");
    }
});