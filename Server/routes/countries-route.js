const express = require('express');
const app = express();
const router = express.Router();
const countries_controller = require('../controllers/countries-controller');
const verfiy_token = require('../middlewares/verfiy-token');

router.route('/:userId/countries')
        .get(verfiy_token, countries_controller.get_all_countries)
        .post(countries_controller.add_country)

router.route('/:userId/countries/:countryId')
        .patch(countries_controller.edit_country)
        .delete(countries_controller.delete_country)

module.exports = router;








