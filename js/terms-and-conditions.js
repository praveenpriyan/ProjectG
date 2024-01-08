function openDialog() {
    document.getElementById('dialog').style.display = 'block';
}

function closeDialog() {
    var agreeCheckbox = document.getElementById('agreeCheckbox');

    if (agreeCheckbox.checked) {
        document.getElementById('dialog').style.display = 'none';
        // Redirect to the homepage or perform any other action here
        window.location.href = 'homepage.html';
    } else {
        alert('Please agree to the terms and conditions.');
    }
}
