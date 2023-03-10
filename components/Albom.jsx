const React = require('react');

module.exports = function Albom({ albom }) {
  return (
    <div data-id={albom.id} className="card albomCard">
      <img
        src="https://texterra.ru/upload/iblock/132/anons.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{albom.name}</h5>
        <p className="card-text">{albom.description}</p>
        <a href={`/myalboms/fotolist/${albom.id}`} className="btn">
          Открыть
        </a>
        <a
          type="button"
          data-id={albom.id}
          href={`/edit/albums/${albom.id}`}
          className="btn"
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
