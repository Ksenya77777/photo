const formReg = document.querySelector('#formReg');
const formLogin = document.querySelector('#formLogin');
if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { login, email, password1, password2, action, method } = event.target;
    const dataSend = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        email: email.value,
        password1: password1.value,
        password2: password2.value,
      }),
    });
    const data = await dataSend.json();
    if (data.message === 'Зарегистрировано') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}

if (formLogin) {
  console.log(123)
  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { login, password1, action, method } = event.target;

    const dataSend = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password1: password1.value,
      }),
    });
    const data = await dataSend.json();
    if (data.message === 'Вы вошли') {
      window.location.href = '/';
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
