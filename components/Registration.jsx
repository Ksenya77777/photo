const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout>
      <div className="login-box">
        <form action="/auth/registration" method="POST" id="formReg">
          <div className="user-box">
            <input
              name="login"
              type="text"
              placeholder="Введите Ваше имя"
              id="name"
            />
          </div>
          <div className="user-box">
            <input
              name="email"
              type="email"
              placeholder="Введите адрес электронной почты"
              id="email"
            />
          </div>
          <div className="user-box">
            <input
              name="password1"
              type="password"
              placeholder="Введите пароль"
              id="password1"
            />
          </div>
          <div className="user-box">
            <input
              name="password2"
              type="password"
              placeholder="Введите пароль еще раз"
              id="password2"
            />
          </div>
          <button type="submit" className="btn-black">
            Зарегистрироваться
            <span />
          </button>
        </form>
        <div className="error">
          <h2></h2>
        </div>
      </div>
    </Layout>
  );
};
