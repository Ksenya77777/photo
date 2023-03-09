const React = require('react');
const Layout = require('./Layout');
const Albom = require('./Albom');

module.exports = function MyAlboms() {
  return (
    <Layout>
      <Albom />
      <form>
       
        <div className="container"
        style={{ width: '20rem' }}>
           <h3>Добавить альбом</h3>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >
              Название
            </label>
            <input
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
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
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
          <button
            type="submit"
            className="btn btn-primary"
          >
            Создать
          </button>
        
        
        </div>
      </form>
    </Layout>
  );
};
