const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout>
      <div>
        <form action="/auth/login" method="POST" id="formLogin">
          <div className="form1">
            <label>
              Логин:
              <input name="login" type="text" placeholder="Введите Ваше имя" id="name" />
            </label>
          </div>
          <div className="form1">
            <label>
              Пароль:
              <input name="password1" type="password" placeholder="Введите пароль" id="password1" />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </form>
        <div className="error">
          <h2></h2>
        </div>
      </div>
    </Layout>
  );
};
