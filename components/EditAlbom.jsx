/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');

module.exports = function EditAlbom({ user }) {
  return (
    <Layout user={user}>
      <form
        id="editAlbomid"
        className="editAlbomForm"
        action="/myalboms"
    
      >
        <div
          className="container"
          style={{ width: '20rem' }}
        >
          <h3>Изменить альбом</h3>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >
              Название
            </label>
            <input
              name="name"
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
              name="description"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              name="visible"
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1"
            >
              Закрытый альбом
            </label>
          </div>
          <div className='errorMessageEdit'></div>
          <button
            type="submit"
            className="btn btn-primary editBtn"
          >
            Изменить
          </button>
        </div>
      </form>
    </Layout>
  );
};
