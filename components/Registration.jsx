const React = require('react');

module.exports = function Registration({ title }) {
  return (
    <Layout>
      <div>
        <form action="" method="POST" id="formReg">
          <div className="form1">
            <label>Имя:<input name="login" type="text" placeholder="Введите Ваше имя" id="name" />
            </label>
          </div>
          <div className='="form1'>
            <label>E-mail:<input
                name="email"
                type="email"
                placeholder="Введите адрес электронной почты"
                id="email"
              />
            </label>
          </div>
          <div className='="form1'>
            <label>Пароль:<input name="password1" type="password" placeholder="Введите пароль" id="password1" />
            </label>
          </div>
          <div className='="form1'>
            <label>Повторите пароль:<input
                name="password2"
                type="password"
                placeholder="Введите пароль еще раз"
                id="password2"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
        <div className="error">
          <h2></h2>
        </div>
      </div>
    </Layout>
  );
};
