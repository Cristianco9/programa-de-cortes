function validateForm() {
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    if ( userName === '' & password === '') {
        document.getElementById('errorMessage').style.display = 'block';
        return false;
    }
    return true;
}