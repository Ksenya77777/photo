const router = require('express').Router();
const Home = require('../../components/Home');

router.route('/').get(async (req, res) => {
  try {
    //   const arrCars = await Car.findAll({ raw: true });
    //   const { user } = res.locals;
    res.renderComponent(Home, {});
  } catch (error) {
    res.status(500).json({ err: error});
  }
});

module.exports = router;
