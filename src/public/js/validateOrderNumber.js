function validateForm() {
    let orderNumber = document.getElementById('orderNumber').value;
    if (orderNumber === '' || orderNumber === '0') {
        document.getElementById('errorMessage').style.display = 'block';
        return false;
    }
    return true;
}
