const router = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../../components/Login');
const Registration = require('../../components/Registration');
const { User } = require('../../db/models');

router.get('/registration', (req, res) => {
  res.renderComponent(Registration, { title: 'Registration' });
});

router.post('/registration', async (req, res) => {
  try {
    const { login, email, password1, password2 } = req.body;
    if (password1 && password2 && login && email) {
      if (password1 === password2) {
        const userEmail = await User.findOne({ where: { email } });
        if (!userEmail) {
          const hash = await bcrypt.hash(password1, 10);
          const newUser = await User.create({ login, email, password: hash });
          req.session.userId = newUser.id;
          res.json({ message: 'Зарегистрировано' });
        } else {
          res.json({ message: 'Вы уже зарегистрированы на данном сайте' });
        }
      } else {
        res.json({ message: 'Ваши пароли не совпадают' });
      }
    } else {
      res.json({ message: 'Пожалуйста, заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.app.locals = {};
    res.clearCookie('user_sid').redirect('/');
  });
});

router.get('/login', (req, res) => {
  res.renderComponent(Login, { title: 'Login' });
});

router.post('/login', async (req, res) => {
  try {
    const { login, password1 } = req.body;
    if (login && password1) {
      if (login) {
        const userLogin = await User.findOne({ where: { login } });
        if (userLogin) {
          const isSame = await bcrypt.compare(password1, userLogin.password);
          if (isSame) {
            req.session.userId = userLogin.id;
            res.json({ message: 'Вы вошли' });
          } else {
            res.json({ message: 'Неверный пароль' });
          }
        } else {
          res.json({ message: 'Нет такого логина' });
        }
      }
    } else {
      res.json({ message: 'Пожалуйста, заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
