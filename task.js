document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Retrieve input values
    const fullName = document.getElementById('fullName').value;
    const college = document.getElementById('college').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    console.log('hii');
    // Simulate a successful sign-up
    alert(`Thank you, ${fullName}! You've successfully joined the waiting list.`);
    // Clear form
    document.querySelector('.signup-form').reset();
});
