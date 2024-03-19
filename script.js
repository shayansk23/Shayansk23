document.getElementById('namePromptButton').addEventListener('click', function() {
    let userName = prompt('Please enter your name:', '');
    if (userName) {
        document.getElementById('nameDisplay').textContent = `Welcome, ${userName}!`;
    }
});

document.getElementById('profileImage').addEventListener('click', function() {
    this.classList.toggle('enlarged');
});

function hoverEffect(element) {
    element.style.color = 'red'; // Hover color change
}

function hoverEffectOff(element) {
    element.style.color = 'black'; // Original color
}

// New form functionality
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch all form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Store data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(data));

    // Provide feedback or redirect user
    alert('Your information has been saved. Thank you!');

    // Optionally clear the form or redirect the user
    // this.reset(); // Uncomment this if you want to clear the form after submission
    // window.location.href = 'thankyoupage.html'; // Redirect to a thank you page
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
});