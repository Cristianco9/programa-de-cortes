function validateForm() {
    let rol = document.getElementById('rol').value;
    let email = document.getElementById('email').value;
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;
    if ( rol === '' & email === '' & userName === '' & password === '' & repeatPassword === '') {
        document.getElementById('errorMessage').style.display = 'block';
        return false;
    } if ( password !== repeatPassword ) {
        document.getElementById('wrongPassword').style.display = 'block';
        return false;
    }
    return true;
}
