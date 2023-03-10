const React = require('react');
const Layout = require('./Layout');
const Albom = require('./Albom');

module.exports = function MyAlboms({ arr, user }) {
  return (
    <Layout user={user}>
      <div className="main-album">
        <div className="albumList" id="divAlbum">
          {arr.length ? (
            arr.map((albom) => <Albom key={albom.id} albom={albom} />)
          ) : (
            <div>Нет альбомов</div>
          )}
        </div>
				<div className='album-form'>
        <div className="login-box">
          <form className="addAlbomForm" action="/myalboms" method="post">
            <div style={{ width: '20rem' }}>
              <h3>Добавить альбом</h3>
              <div className="user-box">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Название"
                />
              </div>
              <div className="user-box">
                <input
                  name="description"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Описание"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  name="visible"
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Закрытый альбом
                </label>
              </div>
              <button type="submit" className="btn btn-black">
                Создать
                <span />
              </button>
            </div>
          </form>
        </div>
				</div>
      </div>
    </Layout>
  );
};
