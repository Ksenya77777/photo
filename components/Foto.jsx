const React = require('react');

module.exports = function Foto({ foto }) {
  return (
    <div
      data-id={foto.id}
      className="card albomCard"
      style={{ width: '20rem' }}
    >
      <img
        src={foto.url}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{foto.name}</h5>
        <p className="card-text">{foto.description}</p>

        <button
          type="button"
          data-id={foto.id}
          className="btn btn-danger btnDeletefoto"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
