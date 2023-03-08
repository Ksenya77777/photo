const router = require('express').Router();
const Home = require('../../components/Home');
// const { Photo } = require('../../db/models');



router.route('/').get(async (req, res) => {
  try {
    // const arr = await Photo.findAll({ raw: true });
    // const { user } = res.locals;
    res.renderComponent(Home);
  
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

module.exports = router;
