//Upload data to local storage on form submit
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data saved to local storage!');
    this.reset();
});

