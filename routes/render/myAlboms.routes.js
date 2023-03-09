const router = require('express').Router();

const MyAlboms = require('../../components/MyAlboms');

router.route('/').get(async (req, res) => {
  try {
    res.renderComponent(MyAlboms);
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = router;
