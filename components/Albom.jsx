const React = require('react');

module.exports = function Albom({ albom }) {

  return (
    <div
      data-id={albom.id}
      className="card albomCard"
      style={{ width: '20rem' }}
    >
      <img
        src="https://texterra.ru/upload/iblock/132/anons.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{albom.name}</h5>
        <p className="card-text">{albom.description}</p>
        <a
          href="#"
          className="btn btn-primary"
        >
          Открыть
        </a>
        <a
          type="button"
          data-id={albom.id}
          href="/edit/albums"
          className="btn btn-info"
        >
          Изменить
        </a>
        <button
          type="button"
          data-id={albom.id}
          
          className="btn btn-danger btnDelete"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
