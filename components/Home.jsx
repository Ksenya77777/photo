const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ result, user }) {
  return (
    <Layout result={result} user={user}>
      <div id="background">
        <div id="gallery">
          {result.map((el) => (
            <div className="imagewrap" key={el.id}>
              <figure className="pic">
                <img
                  className="confirmed"
                  src={el.urls.regular}
                  // style={{ width: '320px', height: '400px' }}
                  alt="..."
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
