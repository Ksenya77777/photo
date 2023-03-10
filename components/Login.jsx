const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout>
      <div className="login-box">
        <form action="/auth/login" method="POST" id="formLogin">
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
              name="password1"
              type="password"
              placeholder="Введите пароль"
              id="password1"
            />
          </div>
          <button type="submit" className="btn btn-black">
            Войти
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
