function validateForm() {
  let rol = document.getElementById('rol').value;
  let email = document.getElementById('email').value;
  let userName = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeatPassword').value;

  if (rol === '' || email === '' || userName === '' || password === '' || repeatPassword === '') {
      document.getElementById('errorMessage').style.display = 'block';
      return false;
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
      document.getElementById('wrongEmail').style.display = 'block';
      document.getElementById('wrongPassword').style.display = 'none';
      document.getElementById('weakPassword').style.display = 'none';
      return false;
  }

  if (password !== repeatPassword) {
      document.getElementById('wrongEmail').style.display = 'none';
      document.getElementById('wrongPassword').style.display = 'block';
      document.getElementById('weakPassword').style.display = 'none';
      return false;
  }

  let passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{5,30}$/;
  if (!passwordRegex.test(password)) {
      document.getElementById('wrongEmail').style.display = 'none';
      document.getElementById('wrongPassword').style.display = 'none';
      document.getElementById('weakPassword').style.display = 'block';
      return false;
  }

  return true;
}
