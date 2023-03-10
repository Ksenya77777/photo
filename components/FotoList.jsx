/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');

module.exports = function FotoList({user}) {
  return (
    <Layout user={user}>
      <form
        className="addAlbomForm"
        action="/myalboms/fotoList"
        method="post"
      >
        <div
          className="container"
          style={{ width: '20rem' }}
        >
          <h3>Добавить фото</h3>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >
              Name
            </label>
            <input
              name="nameFoto"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            >
              Описание
            </label>
            <input
              name="descriptionFoto"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Url
          </label>
          <input
            name="urlFoto"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div className="mb-3 form-check" />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Добавить
          </button>
        </div>
      </form>
    </Layout>
  );
};
