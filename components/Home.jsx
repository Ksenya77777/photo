const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ result, user }) {

  return (
    <Layout result={result} user={user}>
      {result.map((el) => (
        <div
          className="container1"
          key={el.id}
        >
          <div className="foto">
            <img
              src={el.urls.regular}
                // style={{ width: '320px', height: '400px' }}
              alt="..."
            />
          </div>
        </div>
      ))}
    </Layout>
  );
};
