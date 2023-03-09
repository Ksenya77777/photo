const React = require('react');

module.exports = function Albom() {
  return (
    <div
      className="card"
     
      style={{ width: '20rem' }}
    >
      <img
        src="https://texterra.ru/upload/iblock/132/anons.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Мой первый альбом</h5>
        <p className="card-text">Тут должно быть описание альбома</p>
        <a
          href="#"
          className="btn btn-primary"
        >
          Открыть
        </a>
        <a
          href="#"
          className="btn btn-info"
        >
          Изменить
        </a>
        <a
          href="#"
          className="btn btn-danger"
        >
          Удалить
        </a>
      </div>
    </div>
  );
};
