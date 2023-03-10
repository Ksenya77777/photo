/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <script defer src="/js/application.js" />
        <script defer src="/js/authScript.js" />

        <link rel="stylesheet" href="/css/polaroid.css" />
        <title>PhotoAlbom</title>
      </head>

      <nav className="navbar navbar-expand-lg bg-body-tertiary data-bs-theme nav-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Photo-Album
          </a>
          {user?.login ? <p>{user.login}</p> : <p></p>}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Главная
                </a>
              </li>
              {user?.login ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/myalboms">
                      Мои альбомы
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/logout">
                      Выход
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/login">
                      Войти
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/registration">
                      Регистрация
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <body>{children}</body>
    </html>
  );
};
